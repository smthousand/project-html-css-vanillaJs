const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (evt) => {
    const xPos = evt.offsetX;
    const yPos = evt.offsetY;
    const spanEl = document.createElement('span');
    spanEl.style.left = `${xPos}px`;
    spanEl.style.top = `${yPos}px`;
    
    const size = Math.random() * 100;
    spanEl.style.width = `${size}px`
    spanEl.style.height = `${size}px`

    bodyEl.appendChild(spanEl)
    setTimeout(() => {
        spanEl.remove();
    }, 3000)
})