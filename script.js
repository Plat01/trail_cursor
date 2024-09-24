document.addEventListener('mousemove', (e) => cursorTrail(e), false);
document.addEventListener('mouseenter', (e) => cursorTrail(e), false);

function cursorTrail(e) {
    const DIF = 0
    let trail = document.createElement('div');
    trail.className = 'trail-dot';
    const  dispers = () =>  DIF - Math.random() * DIF;
    trail.style.left = `${e.pageX + dispers()}px`;  
    trail.style.top = `${e.pageY + dispers()}px`;
    document.body.appendChild(trail);
    let trails = document.querySelectorAll('.trail-dot');    

    setTimeout(() => {
        // trails.forEach(el => el.style.transform = 'scale(0)');
        trail.style.transform = 'scale(0)'
        // trails.forEach(el => el.style.opacity -= 0.1);
        // trails.forEach(el.style.opacity < 0.1 ? el.remove() : null);
    }, 50);

    setTimeout(() => {
        trail.remove();
    }, 200);
};
