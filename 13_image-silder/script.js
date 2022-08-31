const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

const imgsEl = document.querySelectorAll('img');

const imgContainerEl = document.querySelector('.image-container');

let currentImg = 1; // result

let timeout;

prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeout);
    updateImg()
})

updateImg() // setTimeout

function updateImg() {
    if (currentImg > imgsEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgsEl.length;
    }
    imgContainerEl.style.transform = `translateX(-${(currentImg - 1) * 840}px)`;

    timeout = setTimeout(() => {
       currentImg++
       updateImg() 
    }, 3000);
}
    
