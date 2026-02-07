window.galleryComponents = [
  {
    name: "Copy Button",
    path: "copy-button", // Folder name (still useful for reference/download instruction)
    description: "An animated copy button with bounce effect on press.",
    html: `<div class="icon-conatiner">
    <?xml version="1.0" encoding="UTF-8"?>
    <svg width="19px" height="21px" viewBox="0 0 19 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Group</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-142.000000, -122.000000)">
          <g id="Group" transform="translate(142.000000, 122.000000)">
            <path
              d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
              id="Rectangle-Copy" fill="#C4FFE4"></path>
            <path
              d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
              id="Rectangle" fill="#85EBBC"></path>
            <path d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z" id="Path-2"
              fill="#64B18D"></path>
          </g>
        </g>
      </g>
    </svg>
    <svg width="19px" height="21px" viewBox="0 0 19 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Group</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-142.000000, -122.000000)">
          <g id="Group" transform="translate(142.000000, 122.000000)">
            <path
              d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
              id="Rectangle-Copy" fill="#C4FFE4"></path>
            <path
              d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
              id="Rectangle" fill="#85EBBC"></path>
            <path d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z" id="Path-2"
              fill="#64B18D"></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
<div class="text">long press me</div>`,
    css: `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #c1ffe2;
}

.icon-conatiner {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 15px;
  box-shadow: 20px 20px 15px 0 #ababab4d;
  cursor: pointer;
  /* animation: bounce 0.3s 1 forwards; */
}
svg {
  width: 50px;
  height: auto;
}
svg:last-child {
  position: absolute;
}

.icon-conatiner:active {
  animation: press 0.2s 1 linear;
}
.icon-conatiner:active svg:last-child {
  animation: bounce 0.2s 1 linear;
}
.text {
  color: #666;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
}
@keyframes press {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
}
@keyframes bounce {
  50% {
    transform: rotate(5deg) translate(20px, -50px);
  }
  to {
    transform: scale(0.9) rotate(10deg) translate(50px, -80px);
    opacity: 0;
  }
}`,
    js: "" // No JS for this component
  },
  {
    name: "3D CSS Drawer",
    path: "drawer",
    description: "Pure CSS 3D interactive chest of drawers. Click to open!",
    html: `<div class="chest">
  <div class="chest__panel chest__panel--back"></div>
  <div class="chest__panel chest__panel--top"></div>
  <div class="chest__panel chest__panel--bottom"></div>
  <div class="chest__panel chest__panel--right"></div>
  <div class="chest__panel chest__panel--front">
    <div class="chest__panel chest__panel--front-frame"></div>
  </div>
  <div class="chest__panel chest__panel--left"></div>
  
  <div class="chest__drawer drawer" data-position="1">
    <details>
      <summary></summary>
    </details>
    <div class="drawer__structure">
      <div class="drawer__panel drawer__panel--back"><span>CSS</span></div>
      <div class="drawer__panel drawer__panel--bottom"></div>
      <div class="drawer__panel drawer__panel--right"></div>
      <div class="drawer__panel drawer__panel--left"></div>
      <div class="drawer__panel drawer__panel--front"></div>
    </div>
  </div>
  
  <div class="chest__drawer drawer" data-position="2">
    <details>
      <summary></summary>
    </details>
    <div class="drawer__structure">
      <div class="drawer__panel drawer__panel--back"><span>is</span></div>
      <div class="drawer__panel drawer__panel--bottom"></div>
      <div class="drawer__panel drawer__panel--right"></div>
      <div class="drawer__panel drawer__panel--left"></div>
      <div class="drawer__panel drawer__panel--front"></div>
    </div>
  </div>
  
  <div class="chest__drawer drawer" data-position="3">
    <details>
      <summary></summary>
    </details>
    <div class="drawer__structure">
      <div class="drawer__panel drawer__panel--back">
        <span class="letter">A</span>
        <span class="letter">w</span>
        <span class="letter">e</span>
        <span class="letter">s</span>
        <span class="letter">o</span>
        <span class="letter">m</span>
        <span class="letter">e</span>
      </div>
      <div class="drawer__panel drawer__panel--bottom"></div>
      <div class="drawer__panel drawer__panel--right"></div>
      <div class="drawer__panel drawer__panel--left"></div>
      <div class="drawer__panel drawer__panel--front"></div>
    </div>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  transform-style: preserve-3d;
  will-change: transform;
}
*:after, *:before {
  box-sizing: border-box;
  transform-style: preserve-3d;
  will-change: transform;
}

:root {
  --bg: hsl(210, 32%, 80%);
  --hover: 0.05;
  --default: 0.01;
  --limit: 0.9;
  --height: 30;
  --width: 20;
  --depth: 15;
  --frame: 1;
  --handle: hsl(0, 0%, 80%);
  --hue: 10;
  --saturation: 0%;
  --drawer-one: hsl(0, 0%, 98%);
  --drawer-two: hsl(0, 0%, 90%);
  --drawer-three: hsl(0, 0%, 95%);
  --transition: 0.2s;
  
  /* Calculated Colors */
  --unit-one: hsl(var(--hue), var(--saturation), 50%);
  --unit-two: hsl(var(--hue), var(--saturation), 40%);
  --unit-three: hsl(var(--hue), var(--saturation), 20%);
  --unit-four: hsl(var(--hue), var(--saturation), 15%);
}

body {
  background: var(--bg);
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.chest {
  height: calc(var(--height) * 1vmin);
  transform: translate3d(0, 0, 0) rotateX(-32deg) rotateY(40deg);
  width: calc(var(--width) * 1vmin);
  color: hsl(0, 10%, 10%);
}

.chest__panel {
  position: absolute;
}

.chest__panel--back {
  background: var(--unit-two);
  height: 100%;
  width: 100%;
  transform: translate3d(0, 0, calc(var(--depth) * -0.5vmin));
}

.chest__panel--front {
  height: 100%;
  width: 100%;
  transform: translate3d(0, 0, calc(var(--depth) * 0.5vmin));
}

.chest__panel--front-frame {
  height: 100%;
  width: 100%;
  border: calc(var(--frame) * 1vmin) solid var(--unit-one);
  border-bottom-width: calc(var(--frame) * 2vmin);
  transform: translate3d(0, 0, 0);
  box-sizing: border-box;
}

.chest__panel--front-frame:after,
.chest__panel--front-frame:before {
  content: '';
  background: var(--unit-one);
  height: calc(var(--frame) * 1.5vmin);
  width: calc(var(--width) * 1vmin);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
}

.chest__panel--front-frame:after {
  top: calc(100 / 3 * 1.01%);
}

.chest__panel--front-frame:before {
  top: calc(100 / 3 * 2.01%);
}

.chest__panel--left,
.chest__panel--right {
  height: 100%;
  left: 50%;
  width: calc(var(--depth) * 1vmin);
  background: var(--unit-three);
  transform: translate(-50%, 0) rotateY(90deg) translate3d(0, 0, calc(var(--width) * 0.5vmin));
}

.chest__panel--left {
  transform: translate(-50%, 0) rotateY(90deg) translate3d(0, 0, calc(var(--width) * -0.5vmin));
}

.chest__panel--right {
  width: calc((var(--depth) * 1vmin) + 2px);
}

.chest__panel--top,
.chest__panel--bottom {
  height: calc(var(--depth) * 1vmin);
  width: calc(var(--width) * 1vmin);
  background: var(--unit-two);
}

.chest__panel--top {
  top: 0;
  width: calc((var(--width) * 1vmin) + 0.1vmin);
  height: calc((var(--depth) * 1vmin) + 0.1vmin);
  left: 50%;
  transform: translate(-50%, -50%) rotateX(-90deg);
}

.chest__panel--bottom {
  bottom: 0;
  transform: translate(0, 50%) rotateX(-90deg);
}

.chest__drawer {
  --drawer-height: calc((var(--height) - (5 * var(--frame))) / 3);
  position: absolute;
  top: var(--top, 0);
  left: 50%;
  height: calc(var(--drawer-height) * 1vmin);
  width: calc((var(--width) - (2 * var(--frame))) * 1vmin);
  transform: translate3d(-50%, 0, calc((var(--depth) * 0.5vmin) + 0.01vmin));
}

.chest__drawer[data-position="1"] {
  --index: 1;
  --top: calc(var(--frame) * 1vmin);
}

.chest__drawer[data-position="2"] {
  --index: 2;
  --top: calc(((2 * var(--frame)) + var(--drawer-height)) * 1vmin);
}

.chest__drawer[data-position="3"] {
  --index: 3;
  --top: calc(((3 * var(--frame)) + (2 * var(--drawer-height))) * 1vmin);
}

.drawer__structure {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

details,
.drawer__structure {
  transition: transform var(--transition);
  transform: translate3d(0, 0, calc((var(--open, var(--default)) * var(--depth)) * 1vmin));
  transform-style: preserve-3d;
}

.drawer__panel {
  position: absolute;
}

.drawer__panel--left,
.drawer__panel--right {
  width: calc(var(--depth) * 1vmin);
  height: 65%;
  background: var(--drawer-two);
  bottom: 1%;
}

.drawer__panel--left {
  left: 0;
  transform-origin: 0 50%;
  transform: rotateY(90deg);
}

.drawer__panel--right {
  right: 0;
  transform-origin: 100% 50%;
  transform: rotateY(-90deg);
}

.drawer__panel--front {
  height: calc((var(--drawer-height) + (0.6 * var(--frame))) * 1vmin);
  width: calc((var(--width) - (0.6 * var(--frame))) * 1vmin);
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 1px);
  background: var(--unit-four);
}

.drawer__panel--bottom {
  width: 100%;
  height: calc(var(--depth) * 1vmin);
  background: var(--drawer-three);
  bottom: 5%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: translate(-50%, 0) rotateX(90deg);
}

.drawer__panel--back {
  width: 100%;
  height: 65%;
  background: var(--drawer-one);
  bottom: 1%;
  left: 50%;
  transform: translate3d(-50%, 0, calc(var(--depth) * -1vmin));
  text-align: center;
  line-height: calc(var(--drawer-height) * 0.65vmin);
  font-size: 3vmin;
  font-family: sans-serif;
  font-weight: bold;
}

.letter {
  color: hsl(var(--hue), 80%, 50%);
  display: inline-block;
  animation: wave calc(var(--open) * 1s) calc(var(--delay) * -0.1s) infinite ease-in-out;
}

.letter:nth-of-type(1) { --hue: 15; --delay: 0; }
.letter:nth-of-type(2) { --hue: 35; --delay: 1; }
.letter:nth-of-type(3) { --hue: 45; --delay: 2; }
.letter:nth-of-type(4) { --hue: 90; --delay: 3; }
.letter:nth-of-type(5) { --hue: 180; --delay: 4; }
.letter:nth-of-type(6) { --hue: 260; --delay: 5; }
.letter:nth-of-type(7) { --hue: 320; --delay: 6; }

@keyframes wave {
  0%, 100% { transform: translate3d(0, 10%, 1px); }
  50% { transform: translate3d(0, -10%, 1px); }
}

details {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  outline: transparent;
  z-index: 50;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, calc((var(--open, var(--default)) * var(--depth)) * 1vmin + 2px)); /* Brings click target forward */
}

details:hover:not([open]),
details:hover:not([open]) + .drawer__structure {
  --open: var(--hover);
}

details[open],
details[open] + .drawer__structure {
  --open: var(--limit);
}

.drawer__structure {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform var(--transition);
  transform: translate3d(0, 0, calc((var(--open, var(--default)) * var(--depth)) * 1vmin));
  transform-style: preserve-3d;
}

details,
.drawer__structure {
  transition: transform var(--transition);
}

summary {
  outline: transparent;
  height: 100%;
  width: 100%;
  display: block;
  background: rgba(0,0,0,0); /* Ensure hit testing */
}

summary::-webkit-details-marker {
  display: none;
}

summary:after {
  content: '';
  position: absolute;
  background: linear-gradient(var(--handle), var(--handle)) 50% 15% / 40% 8% no-repeat, transparent;
  height: 110%;
  width: 110%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0.5vmin);
}

.drawer__panel {
  position: absolute;
}`,
    js: ""
  },
  {
    name: "Variable Font Hover",
    path: "hover-animation",
    description: "Smooth font weight transition using CSS Variable Fonts.",
    html: `<!-- Dependencies -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo:wght@100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<section>
  <div class="title">
    <i class="fas fa-angle-double-left"></i>Hover Here<i class="fas fa-angle-double-right"></i>
  </div>
</section>`,
    css: `body {
  padding: 0;
  margin: 0;
  background: black;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
  width: 100%;
}

.title {
  font-family: "Exo", sans-serif;
  font-size: 3rem; /* Reduced from 72px */
  color: white;
  text-align: center;
  font-variation-settings: "wght" 100;
  transition: font-variation-settings 1s ease-out;
  cursor: default;
  white-space: nowrap; /* Prevent wrapping */
}

.title:hover {
  font-variation-settings: "wght" 1000;
}

.fas {
  font-family: "Font Awesome 6 Free", FontAwesome, sans-serif;
  font-size: 2.5rem; /* Reduced from 60px */
  font-style: normal;
  color: orange;
  padding: 0 20px;
  transform: translateY(-2px);
  display: inline-block;
  line-height: normal;
  font-weight: 900;
}`
  },
  {
    name: "Kinetic CSS Loaders",
    path: "kinetic-loaders",
    description: "A collection of single-element HTML/CSS animations.",
    html: `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
<div class="page">
    <!-- Header skipped for preview compactness, or we can keep it small -->
	<header class="header">
		<h1 class="header-title">Kinetic CSS loaders</h1>
	</header>

	<main class="container">
		<div class="item"><i class="loader loader--2"></i></div>
		<div class="item"><i class="loader loader--3"></i></div>
		<div class="item"><i class="loader loader--1"></i></div>
		<div class="item"><i class="loader loader--7"></i></div>
		<div class="item"><i class="loader loader--9"></i></div>
		<div class="item"><i class="loader loader--8"></i></div>
		<div class="item"><i class="loader loader--5"></i></div>
		<div class="item"><i class="loader loader--4"></i></div>
		<div class="item"><i class="loader loader--6"></i></div>
	</main>
</div>`,
    css: `html, body {
	margin: 0;
	display: flex;
	width: 100%;
	height: 100%;
	font-family: 'Noto Sans', sans-serif;
	color: white;
	text-align: center;
	letter-spacing: 0.3px;
	background: linear-gradient(to right top, #F27121, #E94057, #8A2387);
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Force no scrollbars */
}

*, *::before, *::after {
	box-sizing: border-box;
}

.page {
	/* margin: auto;  Handled by flex body */
    padding: 10px; /* Reduced padding */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
	margin-bottom: 1rem;
}

.header-title {
	font-size: 1.2rem; /* Reduced header size */
    font-weight: 700;
    margin: 0;
}

.header-subtitle {
	font-size: 0.9rem;
	text-transform: uppercase;
	opacity: 0.6;
}

.container {
	--block-size: 40px; /* Reduced natural size to fit */
	
	display: grid;
	grid-template-columns: repeat(3, var(--block-size));
	grid-template-rows: repeat(3, var(--block-size));
	grid-gap: 10px;
    margin: 0 auto;
    /* transform removed to ensure proper layout flow */
}

.item	{
	background: rgba(255, 255, 255, 0.1);
	display: grid;
	place-items: center;
	border-radius: 4px;
	transition: opacity 0.4s ease;
}

.container:hover .item {
	opacity: 0.3;
}

.container:hover .item:hover {
	opacity: 1;
}

.loader {
	--loader-size: calc(var(--block-size) / 2);
	--loader-size-half: calc(var(--loader-size) / 2);
	--loader-size-half-neg: calc(var(--loader-size-half) * -1);
	--light-color: rgba(255, 255, 255, 0.3);
  --dot-size: 5px;
  --dot-size-half: calc(var(--dot-size) / 2);
  --dot-size-half-neg: calc(var(--dot-size-half) * -1);
	
	display: block;
	position: relative;
	width: var(--loader-size);
	display: grid;
	place-items: center;
	color: white;
}

.loader::before,
.loader::after {
	content: '';
	position: absolute;
}

/** loader--1 **/
.loader--1 {
	--loader-size: calc(var(--block-size) / 3);
	--anim-duration: 1s;
	--loader-1-dist: calc(var(--loader-size) - var(--dot-size-half) + 1px);
	aspect-ratio: 1 / 1;
	border: 1px solid var(--light-color);
}
.loader--1::before, .loader--1::after {
	width: var(--dot-size);
	aspect-ratio: 1 / 1;
	background: currentColor;
	border-radius: 50%;
	top: var(--dot-size-half-neg);
	left: var(--dot-size-half-neg);
	animation: loader-1 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
}
.loader--1::after { annotation-delay: calc(var(--anim-duration) / 4 * -1); }
@keyframes loader-1 {
	0%, 100% { transform: none; }
	25% { transform: translateX(var(--loader-1-dist)); }
	50% { transform: translateX(var(--loader-1-dist)) translateY(var(--loader-1-dist)); }
	75% { transform: translateX(0) translateY(var(--loader-1-dist)); }
}

/** loader--2 **/
.loader--2 {
	--loader-size: calc(var(--block-size) / 3);
	--anim-duration: 1s;
	height: 1px;
	background-color: var(--light-color);
}
.loader--2::before, .loader--2::after {
	width: var(--dot-size);
	aspect-ratio: 1 / 1;
	background: currentColor;
	border-radius: 50%;
	top: calc(var(--dot-size-half-neg) + 1px);
	left: var(--dot-size-half-neg);
	animation: loader-2 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
}
.loader--2::after { animation-delay: calc(var(--anim-duration) / 3 * -1) }
@keyframes loader-2 {
	0%, 100% { transform: none; }
	44% { transform: translateX(calc(var(--loader-size) + var(--dot-size-half))); }
}

/** loader--3 **/
.loader--3 {
	--loader-size: calc(var(--block-size) / 3);
	--anim-duration: 1.2s;
	aspect-ratio: 1 / 1;
	border: 1px solid var(--light-color);
	border-radius: 50%;
	animation: loader-3 calc(var(--anim-duration) * 3) linear infinite;
}
.loader--3::before, .loader--3::after {
	width: var(--dot-size);
	aspect-ratio: 1 / 1;
	background: currentColor;
	border-radius: 50%;
	top: var(--dot-size-half-neg);
	left: calc(50% - var(--dot-size-half));
	animation: loader-3 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
	transform-origin: center calc(var(--loader-size-half) + var(--dot-size-half) - 1px);
}
.loader--3::after { animation-delay: calc(var(--anim-duration) / 3 * -1); }
@keyframes loader-3 { 100% { transform: rotate(1turn); } }

/** loader--4 **/
.loader--4 {
	--anim-duration: 0.5s;
	aspect-ratio: 1 / 1;
	perspective: 50vmin;
	transform-style: preserve-3d;
	transform: rotateX(55deg);
}
.loader--4::before, .loader--4::after {
	width: 50%;
	aspect-ratio: 1 / 1;
	border: 1px solid currentColor;
	top: 25%;
	left: 25%;
	border-radius: 50%;
	animation: loader-4 var(--anim-duration) cubic-bezier(0.07, 0.59, 0.56, 0.88) infinite;
}
.loader--4::after { animation-delay: calc(var(--anim-duration) / 2 * -1); }
@keyframes loader-4 {
	0% { transform: scale(0.2) translateZ(-8vmin); }
	0%, 100% { opacity: 0; }
	66% { opacity: 0.8; transform: scale(1.2) translateZ(6vmin); }
	100% { transform: scale(1.8) translateZ(2vmin); }
}

/** loader--5 **/
.loader--5 {
	--tilt-deg: 40deg;
	--anim-duration: 0.6s;
	aspect-ratio: 1 / 1;
	perspective: 50vmin;
	transform-style: preserve-3d;
	animation: loader-5-1 calc(var(--anim-duration) * 3) linear alternate-reverse infinite;
}
.loader--5::before, .loader--5::after {
	width: 50%;
	aspect-ratio: 1 / 1;
	background-color: currentColor;
	top: 25%;
	left: 25%;
	clip-path: polygon(50% 0, 100% 100%, 0 100%);
	animation: loader-5 var(--anim-duration) cubic-bezier(0.07, 0.59, 0.56, 0.88) infinite;
}
.loader--5::before { --turn-deg: 360deg; }
.loader--5::after { --turn-deg: 410deg; animation-delay: calc(var(--anim-duration) / 1.8 * -1); }
@keyframes loader-5 {
	0% { transform: scale(0.3) translateZ(-5vmin); }
	0%, 100% { opacity: 0; }
	66% { opacity: 0.8; transform: scale(1.2) translateZ(5vmin) rotate(var(--turn-deg)); }
	100% { transform: scale(1) translateZ(3vmin) rotate(calc(var(--turn-deg) * 1.2)); }
}
@keyframes loader-5-1 {
	0% { transform: rotateX(var(--tilt-deg)) rotateY(-15deg); }
	100% { transform: rotateX(var(--tilt-deg)) rotateY(15deg); }
}

/** loader--6 **/
.loader--6 {
	--loader-size: calc(var(--block-size) / 3);
	--anim-duration: 0.6s;
	aspect-ratio: 1 / 1;
	perspective: 50vmin;
	transform-style: preserve-3d;
	transform: rotateX(35deg);
}
.loader--6::before, .loader--6::after {
	width: 50%;
	aspect-ratio: 1 / 1;
	background-color: currentColor;
	top: 25%;
	left: 25%;
	animation: loader-6 var(--anim-duration) cubic-bezier(0.07, 0.59, 0.56, 0.88) infinite;
}
.loader--6::before {
	--turn-deg: -60deg;
	--x-dist: -25%;
	transform-origin: left calc(var(--loader-size) * -1);
}
.loader--6::after {
	--turn-deg: 60deg;
	--x-dist: 25%;
	transform-origin: right calc(var(--loader-size) * -1);
	animation-delay: calc(var(--anim-duration) / 2 * -1);
}
@keyframes loader-6 {
	0% { transform: scale(0.3) translateZ(-15vmin) rotateY(calc(var(--turn-deg) * -1)); }
	0%, 100% { opacity: 0; }
	33% { opacity: 0.8; transform: scale(1.2) translateZ(5vmin) translateX(var(--x-dist)); }
	100% { transform: scale(1.2) translateZ(5vmin) translateX(var(--x-dist)) rotateY(var(--turn-deg)); }
}

/** loader--7 **/
.loader--7 {
	--loader-size: calc(var(--block-size) / 3);
	--anim-duration: 0.8s;
	aspect-ratio: 1 / 1;
	border: 1px solid var(--light-color);
	border-radius: 50%;
	animation: loader-7 calc(var(--anim-duration) * 2) linear infinite;
}
.loader--7::before, .loader--7::after {
	width: var(--dot-size);
	aspect-ratio: 1 / 1;
	background: currentColor;
	border-radius: 50%;
	top: calc(50% - var(--dot-size-half));
	left: calc(50% - var(--dot-size-half));
	animation: loader-7-1 var(--anim-duration) cubic-bezier(0.32, 0.41, 0.3, 1.87) infinite;
}
.loader--7::after { animation-name: loader-7-2; animation-delay: calc(var(--anim-duration) / 3 * -1); }
@keyframes loader-7 { 100% { transform: rotate(1turn); } }
@keyframes loader-7-1 {
	0%, 100% { transform: translateX(var(--loader-size-half-neg)); }
	55% { transform: translateX(var(--loader-size-half)); }
}
@keyframes loader-7-2 {
	0%, 100% { transform: translateY(var(--loader-size-half-neg)); }
	55% { transform: translateY(var(--loader-size-half)); }
}

/** loader--8 **/
.loader--8 {
	--loader-size: calc(var(--block-size) / 3);
	--anim-duration: 0.8s;
	aspect-ratio: 1 / 1;
	border: 1px dashed var(--light-color);
	border-radius: 50%;
	perspective: 50vmin;
	transform-style: preserve-3d;
	transform: rotateX(45deg) rotateY(15deg);
}
.loader--8::before, .loader--8::after {		
	animation: loader-8 var(--anim-duration) cubic-bezier(0.39, 0.24, 0, 0.99) infinite;
}
.loader--8::before {
	--z-dist: 8vmin;
	width: var(--dot-size);
	aspect-ratio: 1 / 1;
	background: currentColor;
	border-radius: 50%;
	top: calc(50% - var(--dot-size-half));
	left: calc(50% - var(--dot-size-half));
	animation-delay: calc(var(--anim-duration) / 4 * -1);
}
.loader--8::after {
	--z-dist: 4vmin;
	width: 65%;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	border: 1px solid currentColor;
}
@keyframes loader-8 {
	0%, 100% { transform: translateZ(calc(var(--z-dist) * -1)) scale(0.6); }
	55% { transform: translateZ(var(--z-dist)); }
}

/** loader--9 **/
.loader--9 {
	--loader-size: calc(var(--block-size) / 6);
	--anim-duration: 0.6s;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	background-color: currentColor;
	box-shadow: 0 0 var(--loader-size) var(--light-color);
	animation: loader-9 calc(var(--anim-duration) * 6) linear infinite;
}
.loader--9::before, .loader--9::after {
	width: var(--dot-size);
	aspect-ratio: 1 / 1;
	background: currentColor;
	border-radius: 50%;
	animation: loader-9-1 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
}
.loader--9::before {
	--x-dist: 0;
	--y-dist: var(--loader-size-half);
	bottom: calc(100% + var(--loader-size));
	left: calc(50% - var(--dot-size-half));
	transform-origin: center var(--loader-size);
}
.loader--9::after {
	--x-dist: var(--loader-size-half);
	--y-dist: 0;
	top: calc(50% - var(--dot-size-half));
	right: calc(100% + var(--loader-size));
	transform-origin: var(--loader-size) center;
	animation-delay: calc(var(--anim-duration) / 2 * -1);
}
@keyframes loader-9 { 100% { transform: rotate(1turn); } }
@keyframes loader-9-1 {
	0%, 100% { opacity: 0; }
	33% { opacity: 1; }
	0% { transform: scale(1.1); }
	88% { transform: rotate(180deg) translate(var(--x-dist), var(--y-dist)); }
}`
  },
  {
    name: "Card Hover Effect",
    path: "card-hover",
    description: "Interactive cards with shine and tile reveal effects.",
    html: `<div class="grid">
  <div class="card">
    <span class="icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"
        />
      </svg>
    </span>
    <h4>Products</h4>
    <p>
      Standard chunk of Lorem Ipsum used since the 1500s is showed below
      for those interested.
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </div>
  <div class="card">
    <span class="icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
        />
        <path
          d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
        />
        <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
        <path
          d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
        />
      </svg>
    </span>
    <h4>Categories</h4>
    <p>
      Standard chunk of Lorem Ipsum used since the 1500s is showed below
      for those interested.
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </div>
</div>

<label class="day-night">
  <input type="checkbox" checked />
  <div></div>
</label>`,
    css: `body {
  --background-color: #18181B;
  --text-color: #A1A1AA;

  --card-background-color: rgba(255, 255, 255, .015);
  --card-border-color: rgba(255, 255, 255, 0.1);
  --card-box-shadow-1: rgba(0, 0, 0, 0.05);
  --card-box-shadow-1-y: 3px;
  --card-box-shadow-1-blur: 6px;
  --card-box-shadow-2: rgba(0, 0, 0, 0.1);
  --card-box-shadow-2-y: 8px;
  --card-box-shadow-2-blur: 15px;
  --card-label-color: #FFFFFF;
  --card-icon-color: #D4D4D8;
  --card-icon-background-color: rgba(255, 255, 255, 0.08);
  --card-icon-border-color: rgba(255, 255, 255, 0.12);
  --card-shine-opacity: .1;
  --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
  --card-line-color: #2A2B2C;
  --card-tile-color: rgba(16, 185, 129, 0.05);

  --card-hover-border-color: rgba(255, 255, 255, 0.2);
  --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
  --card-hover-box-shadow-1-y: 5px;
  --card-hover-box-shadow-1-blur: 10px;
  --card-hover-box-shadow-2: rgba(0, 0, 0, 0.3);
  --card-hover-box-shadow-2-y: 15px;
  --card-hover-box-shadow-2-blur: 25px;
  --card-hover-icon-color: #34D399;
  --card-hover-icon-background-color: rgba(52, 211, 153, 0.1);
  --card-hover-icon-border-color: rgba(52, 211, 153, 0.2);

  --blur-opacity: .01;
}

body.light {
  --background-color: #FAFAFA;
  --text-color: #52525B;

  --card-background-color: transparent;
  --card-border-color: rgba(24, 24, 27, 0.08);
  --card-box-shadow-1: rgba(24, 24, 27, 0.02);
  --card-box-shadow-1-y: 3px;
  --card-box-shadow-1-blur: 6px;
  --card-box-shadow-2: rgba(24, 24, 27, 0.04);
  --card-box-shadow-2-y: 2px;
  --card-box-shadow-2-blur: 7px;
  --card-label-color: #18181B;
  --card-icon-color: #18181B;
  --card-icon-background-color: rgba(24, 24, 27, 0.04);
  --card-icon-border-color: rgba(24, 24, 27, 0.1);
  --card-shine-opacity: .3;
  --card-shine-gradient: conic-gradient(from 225deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, #EDFAF6 285deg, #FFFFFF 345deg, rgba(16, 185, 129, 0) 360deg);
  --card-line-color: #E9E9E7;
  --card-tile-color: rgba(16, 185, 129, 0.08);

  --card-hover-border-color: rgba(24, 24, 27, 0.15);
  --card-hover-box-shadow-1: rgba(24, 24, 27, 0.05);
  --card-hover-box-shadow-1-y: 3px;
  --card-hover-box-shadow-1-blur: 6px;
  --card-hover-box-shadow-2: rgba(24, 24, 27, 0.1);
  --card-hover-box-shadow-2-y: 8px;
  --card-hover-box-shadow-2-blur: 15px;
  --card-hover-icon-color: #18181B;
  --card-hover-icon-background-color: rgba(24, 24, 27, 0.04);
  --card-hover-icon-border-color: rgba(24, 24, 27, 0.34);

  --blur-opacity: .1;
}

body.toggle .grid * {
  transition-duration: 0s !important;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-gap: 32px;
  position: relative;
  z-index: 1;
  transform: scale(0.65); /* Scale down for gallery preview */
}

.card {
  background-color: var(--background-color);
  box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1), 0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
  padding: 56px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow .25s;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 15px;
  background-color: var(--card-background-color);
}

.card .icon {
  z-index: 2;
  position: relative;
  display: table;
  padding: 8px;
}

.card .icon::after {
  content: '';
  position: absolute;
  inset: 4.5px;
  border-radius: 50%;
  background-color: var(--card-icon-background-color);
  border: 1px solid var(--card-icon-border-color);
  backdrop-filter: blur(2px);
  transition: background-color .25s, border-color .25s;
}

.card .icon svg {
  position: relative;
  z-index: 1;
  display: block;
  width: 24px;
  height: 24px;
  transform: translateZ(0);
  color: var(--card-icon-color);
  transition: color .25s;
}

.card h4 {
  z-index: 2;
  position: relative;
  margin: 12px 0 4px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: var(--card-label-color);
}

.card p {
  z-index: 2;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-color);
}

.card .shine {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  opacity: 0;
  transition: opacity .5s;
}

.card .shine:before {
  content: '';
  width: 150%;
  padding-bottom: 150%;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 55%;
  filter: blur(35px);
  opacity: var(--card-shine-opacity);
  transform: translateX(-50%);
  background-image: var(--card-shine-gradient);
}

.card .background {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
  mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
}

.card .background .tiles {
  opacity: 0;
  transition: opacity .25s;
}

.card .background .tiles .tile {
  position: absolute;
  background-color: var(--card-tile-color);
  animation-duration: 8s;
  animation-iteration-count: infinite;
  opacity: 0;
}

.card .background .tiles .tile.tile-4,
.card .background .tiles .tile.tile-6,
.card .background .tiles .tile.tile-10 {
  animation-delay: -2s;
}

.card .background .tiles .tile.tile-3,
.card .background .tiles .tile.tile-5,
.card .background .tiles .tile.tile-8 {
  animation-delay: -4s;
}

.card .background .tiles .tile.tile-2,
.card .background .tiles .tile.tile-9 {
  animation-delay: -6s;
}

.card .background .tiles .tile.tile-1 { top: 0; left: 0; height: 10%; width: 22.5%; }
.card .background .tiles .tile.tile-2 { top: 0; left: 22.5%; height: 10%; width: 27.5%; }
.card .background .tiles .tile.tile-3 { top: 0; left: 50%; height: 10%; width: 27.5%; }
.card .background .tiles .tile.tile-4 { top: 0; left: 77.5%; height: 10%; width: 22.5%; }
.card .background .tiles .tile.tile-5 { top: 10%; left: 0; height: 22.5%; width: 22.5%; }
.card .background .tiles .tile.tile-6 { top: 10%; left: 22.5%; height: 22.5%; width: 27.5%; }
.card .background .tiles .tile.tile-7 { top: 10%; left: 50%; height: 22.5%; width: 27.5%; }
.card .background .tiles .tile.tile-8 { top: 10%; left: 77.5%; height: 22.5%; width: 22.5%; }
.card .background .tiles .tile.tile-9 { top: 32.5%; left: 50%; height: 22.5%; width: 27.5%; }
.card .background .tiles .tile.tile-10 { top: 32.5%; left: 77.5%; height: 22.5%; width: 22.5%; }

@keyframes tile {
  0%, 12.5%, 100% { opacity: 1; }
  25%, 82.5% { opacity: 0; }
}

.card .background .line {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity .35s;
}

.card .background .line:before,
.card .background .line:after {
  content: '';
  position: absolute;
  background-color: var(--card-line-color);
  transition: transform .35s;
}

.card .background .line:before {
  left: 0;
  right: 0;
  height: 1px;
  transform-origin: 0 50%;
  transform: scaleX(0);
}

.card .background .line:after {
  top: 0;
  bottom: 0;
  width: 1px;
  transform-origin: 50% 0;
  transform: scaleY(0);
}

.card .background .line.line-1:before { top: 10%; }
.card .background .line.line-1:after { left: 22.5%; }
.card .background .line.line-1:before,
.card .background .line.line-1:after { transition-delay: .3s; }

.card .background .line.line-2:before { top: 32.5%; }
.card .background .line.line-2:after { left: 50%; }
.card .background .line.line-2:before,
.card .background .line.line-2:after { transition-delay: .15s; }

.card .background .line.line-3:before { top: 55%; }
.card .background .line.line-3:after { right: 22.5%; }

.card:hover {
  box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1), 0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2), 0 0 0 1px var(--card-hover-border-color);
}

.card:hover .icon::after {
  background-color: var(--card-hover-icon-background-color);
  border-color: var(--card-hover-icon-border-color);
}

.card:hover .icon svg {
  color: var(--card-hover-icon-color);
}

.card:hover .shine {
  opacity: 1;
  transition-duration: .5s;
  transition-delay: 0s;
}

.card:hover .background .tiles {
  opacity: 1;
  transition-delay: .25s;
}

.card:hover .background .tiles .tile {
  animation-name: tile;
}

.card:hover .background .line {
  opacity: 1;
  transition-duration: .15s;
}

.card:hover .background .line:before {
  transform: scaleX(1);
}

.card:hover .background .line:after {
  transform: scaleY(1);
}

.card:hover .background .line.line-1:before,
.card:hover .background .line.line-1:after { transition-delay: .0s; }
.card:hover .background .line.line-2:before,
.card:hover .background .line.line-2:after { transition-delay: .15s; }
.card:hover .background .line.line-3:before,
.card:hover .background .line.line-3:after { transition-delay: .3s; }

.day-night {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: .3;
}

.day-night input {
  display: none;
}

.day-night input + div {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
  box-shadow: inset 8px -8px 0 0 var(--text-color);
  transform: scale(1) rotate(-2deg);
  transition: box-shadow .5s ease 0s, transform .4s ease .1s;
}

.day-night input + div:before {
  content: '';
  width: inherit;
  height: inherit;
  border-radius: inherit;
  position: absolute;
  left: 0;
  top: 0;
  transition: background-color .3s ease;
}

.day-night input + div:after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: -3px 0 0 -3px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 -23px 0 var(--text-color), 0 23px 0 var(--text-color), 23px 0 0 var(--text-color), -23px 0 0 var(--text-color), 15px 15px 0 var(--text-color), -15px 15px 0 var(--text-color), 15px -15px 0 var(--text-color), -15px -15px 0 var(--text-color);
  transform: scale(0);
  transition: all .3s ease;
}

.day-night input:checked + div {
  box-shadow: inset 20px -20px 0 0 var(--text-color);
  transform: scale(.5) rotate(0deg);
  transition: transform .3s ease .1s, box-shadow .2s ease 0s;
}

.day-night input:checked + div:before {
  background: var(--text-color);
  transition: background-color .3s ease .1s;
}

.day-night input:checked + div:after {
  transform: scale(1);
  transition: transform .5s ease .15s;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  display: flex;
  font-family: 'Inter', Arial;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  overflow: hidden;
}

body:before {
  content: '';
  position: absolute;
  inset: 0 -60% 65% -60%;
  background-image: radial-gradient(ellipse at top, #10B981 0%, var(--background-color) 50%);
  opacity: var(--blur-opacity);
}
`,
    js: `
document.querySelector(".day-night input").addEventListener("change", () => {
  document.querySelector("body").classList.add("toggle");
  setTimeout(() => {
    document.querySelector("body").classList.toggle("light");

    setTimeout(
      () => document.querySelector("body").classList.remove("toggle"),
      10
    );
  }, 5);
});`
  }
];
