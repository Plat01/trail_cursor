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
