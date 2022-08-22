const color = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    color.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r < 150 && g < 150 && b < 150) {
        color.style.color = "#fff";
        btn.style.color = "#fff";
    } else {
        color.style.color = "#000";
        btn.style.color = "#000";
    }
    return `rgb(${r}, ${g}, ${b})`;
}