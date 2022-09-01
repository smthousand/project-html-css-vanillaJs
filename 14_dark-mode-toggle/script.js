const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

inputEl.chacked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = '#22303C';
    } else {
        bodyEl.style.backgroundColor = '#fff';
    }
}

inputEl.addEventListener('input', () => {
    updateBody();
})

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(inputEl.chacked));
}