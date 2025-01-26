const pane = document.querySelector(".pane");
const header = pane.querySelector("header");

let isDragging = false;
let startX, startY, startLeft, startTop;

            function onDrag(event) {
                if (!isDragging) return;

                const movementX = event.clientX - startX;
                const movementY = event.clientY - startY;

                const newLeft = startLeft + movementX;
                const newTop = startTop + movementY;

                const maxLeft = window.innerWidth - pane.offsetWidth;
                const maxTop = window.innerHeight - pane.offsetHeight;

                const clampedLeft = Math.max(0, Math.min(newLeft, maxLeft));
                const clampedTop = Math.max(0, Math.min(newTop, maxTop));

                pane.style.left = `${clampedLeft}px`;
                pane.style.top = `${clampedTop}px`;
            }

            function onMouseDown(event) {
                isDragging = true;
                startLeft = parseInt(window.getComputedStyle(pane).left, 10);
                startTop = parseInt(window.getComputedStyle(pane).top, 10);
                startX = event.clientX;
                startY = event.clientY;

                document.addEventListener("mousemove", onDrag);
                document.addEventListener("mouseup", onMouseUp);
            }

            function onMouseUp() {
                isDragging = false;
                document.removeEventListener("mousemove", onDrag);
                document.removeEventListener("mouseup", onMouseUp);
            }

            header.addEventListener("mousedown", onMouseDown);