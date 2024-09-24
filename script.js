document.addEventListener('mousemove', function(e) {
    // Create a new circle element
    let trail = document.createElement('div');
    trail.className = 'trail-dot';

    // Set initial position of the circle based on mouse coordinates
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Append the circle to the body
    document.body.appendChild(trail);

    // Start shrinking and fading out the circle
    setTimeout(() => {
        trail.style.transform = 'scale(0)';
        trail.style.opacity = '0';
    }, 100); // Delay before shrinking

    // Remove the circle from the DOM after the animation
    setTimeout(() => {
        trail.remove();
    }, 1000); // Remove after 1 second
});
