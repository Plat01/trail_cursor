document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.className = 'trail-dot';
    trail.style.left = `${e.pageX}px`;  // TODO: make in slytly random place 
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.transform = 'scale(0)';
        trail.style.opacity = '0';
    }, 30);

    setTimeout(() => {
        trail.remove();
    }, 100);
});
