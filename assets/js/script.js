document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('codeModal');
    const closeBtn = document.querySelector('.close-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const codeBlocks = document.querySelectorAll('.code-block');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const toggleSnippetBtns = document.querySelectorAll('.copy-snippet-btn');

    let currentComponentData = {};

    // 1. Load Components from Global Data (window.galleryComponents)
    if (window.galleryComponents && Array.isArray(window.galleryComponents)) {
        window.galleryComponents.forEach(component => {
            createCard(component);
        });
    } else {
        console.error('No components found in data.js');
        gallery.innerHTML = '<p style="text-align:center; color:#666;">No components found. Please check data.js</p>';
    }

    // 2. Create Card Element
    function createCard(component) {
        const { name, html, css, js } = component;

        const card = document.createElement('div');
        card.className = 'card';

        // Create Iframe Content (Blob)
        // Note: We inject a small reset and the component CSS
        const iframeContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    /* Basic Reset for Iframe Preview */
                    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; overflow: visible; font-family: sans-serif; }
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>
                    ${js || ''}
                </script>
            </body>
            </html>
        `;

        const blob = new Blob([iframeContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        card.innerHTML = `
            <div class="card-header">
                <div>
                   <div class="card-title">${name}</div>
                </div>
                <div class="card-actions-top">
                    <!-- Optional: Add specific actions here if needed -->
                </div>
            </div>
            <div class="card-preview">
                <iframe src="${url}" title="${name}"></iframe>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline view-code-btn">
                   <i data-lucide="code" class="btn-icon"></i> View Code
                </button>
            </div>
        `;

        // Add Event Listener for View Code
        const viewCodeBtn = card.querySelector('.view-code-btn');
        viewCodeBtn.addEventListener('click', () => {
            openModal(name, html, css, js);
        });

        gallery.appendChild(card);
    }

    // Initialize Lucide Icons for added elements
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 3. Modal Functions
    function openModal(name, html, css, js) {
        document.getElementById('modalTitle').textContent = name;

        // Populate Code Blocks
        const htmlCode = document.querySelector('#htmlCode code');
        const cssCode = document.querySelector('#cssCode code');
        const jsCode = document.querySelector('#jsCode code');

        // We use textContent to safely escape HTML
        htmlCode.textContent = html;
        cssCode.textContent = css;
        jsCode.textContent = js || '';

        // Store current data for Copy All
        currentComponentData = { html, css, js: js || '' };

        // Highlight
        if (window.hljs) {
            hljs.highlightElement(htmlCode);
            hljs.highlightElement(cssCode);
            hljs.highlightElement(jsCode);
        }

        // Show JS tab only if JS exists
        const jsTab = document.querySelector('.tab-btn[data-tab="js"]');
        if (!js || !js.trim()) {
            jsTab.style.display = 'none';
            // If JS was active, switch to HTML
            if (jsTab.classList.contains('active')) {
                switchTab('html');
            }
        } else {
            jsTab.style.display = 'block';
            // Default to HTML tab when opening
            switchTab('html');
        }

        modal.style.display = 'block';
        // Re-run icons inside modal if needed (static, so likely fine)
    }

    // Close Modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // 4. Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    function switchTab(tabName) {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        codeBlocks.forEach(b => b.classList.remove('active'));

        // Add active to current
        const contentId = `${tabName}Code`;
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);

        if (tabBtn && document.getElementById(contentId)) {
            tabBtn.classList.add('active');
            document.getElementById(contentId).classList.add('active');
        }
    }

    // 5. Copy Functionality
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            showToast('Copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy: ', err);
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('Copied to clipboard!');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }

    function showToast(message) {
        // Simple toast implementation
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Trigger reflow
        toast.offsetHeight;

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }

    copyAllBtn.addEventListener('click', () => {
        const { html, css, js } = currentComponentData;
        let content = `<!-- HTML -->\n${html}\n\n/* CSS */\n<style>\n${css}\n</style>`;
        if (js && js.trim()) {
            content += `\n\n// JS\n<script>\n${js}\n</script>`;
        }
        copyToClipboard(content);
    });

    toggleSnippetBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.dataset.target;
            const code = currentComponentData[type];
            copyToClipboard(code);
        });
    });

});
