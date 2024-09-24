# Custom Cursor Trail Effect

A simple JavaScript project that creates black circles trailing the mouse cursor. Circles shrink and disappear after a short delay.

![Cursor Trail Demo](./cursor_trail.gif)

## Usage

1. Add the following CSS for the circles:

   ```css
    .trail-dot {
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: black;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.8;
        transition: transform .2s cubic-bezier(0.42, 0, 1, 0.6);
        z-index: 1000; 
    }
   ```

2. Add this JavaScript to generate and animate the circles:

   ```javascript
    document.addEventListener('mousemove', (e) => cursorTrail(e), false);
    document.addEventListener('mouseenter', (e) => cursorTrail(e), false);

    function cursorTrail(e) {
        let trail = document.createElement('div');
        trail.className = 'trail-dot';
        trail.style.left = `${e.pageX}px`;  
        trail.style.top = `${e.pageY}px`;
        document.body.appendChild(trail);
        let trails = document.querySelectorAll('.trail-dot');    

        setTimeout(() => {
            trail.style.transform = 'scale(0)';
        }, 50);

        setTimeout(() => {
            trail.remove();
        }, 200);
    };
   ```