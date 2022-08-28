const subEl = document.querySelector('.sub');
const containerEl = document.querySelector('.container');
const modalEl = document.querySelector('.modal');

const closeBtn = document.querySelector('.close');

const submitEl = document.querySelector('.submit');



subEl.addEventListener('click', () => {
    containerEl.classList.add('active');
    modalEl.classList.remove('active');
})

closeBtn.addEventListener('click', () => {
    containerEl.classList.remove('active');
    modalEl.classList.add('active');
})

subEl.addEventListener('submit', (evt) => {
    evt.preventDefault()
});