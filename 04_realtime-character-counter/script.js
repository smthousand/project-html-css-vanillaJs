const textareaEl = document.querySelector('#textarea');
const totalCounterEl = document.querySelector('#total-counter');
const noSpaceCounterEl = document.querySelector('#nospace-counter');
const remainingCounterEl = document.querySelector('#remaining-counter');

textareaEl.addEventListener('keyup', () => {
    // 키를 뗄 때 일어나는 이벤트
    updateCounter();
})

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    
    const noSpaceValue = textareaEl.value.replaceAll(" ", "");
    noSpaceCounterEl.innerText = noSpaceValue.length;

    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - noSpaceValue.length;
}