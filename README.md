# Custom Cursor Trail Effect

A simple JavaScript project that creates black circles trailing the mouse cursor. Circles shrink and disappear after a short delay.

## Usage

1. Add the following CSS for the circles:

   ```css
   .trail-dot {
       position: absolute;
       width: 15px;
       height: 15px;
       background-color: black;
       border-radius: 50%;
       pointer-events: none;
       opacity: 0.8;
       transition: transform 1s ease-out, opacity 1s ease-out;
   }
   ```

2. Add this JavaScript to generate and animate the circles:

   ```javascript
   document.addEventListener('mousemove', function(e) {
       let trail = document.createElement('div');
       trail.className = 'trail-dot';
       trail.style.left = `${e.pageX}px`;
       trail.style.top = `${e.pageY}px`;
       document.body.appendChild(trail);

       setTimeout(() => {
           trail.style.transform = 'scale(0)';
           trail.style.opacity = '0';
       }, 100);

       setTimeout(() => {
           trail.remove();
       }, 1000);
   });
   ```