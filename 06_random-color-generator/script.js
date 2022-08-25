const containerEl = document.querySelector('.container');

for (let i = 0; i < 360; i++) {
    const colorContainerEl = document.createElement('div');
    const hexCode = document.createElement('p');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
    colorContainerEl.appendChild(hexCode);
}

const colorContainerEls = document.querySelectorAll('.color-container');
const hexCodes = document.querySelectorAll('p');

generateColors();
generateColorsName();

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = `#${newColorCode}`;
    })
}

function generateColorsName() {
    hexCodes.forEach((hexCode) => {
        const newColorCode = randomColor();
        hexCode.innerText = `#${newColorCode}`;
    })
}

function randomColor() {
    const chars = '0123456789abcdef'; // hex code
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1); 
    }
    return colorCode;
}