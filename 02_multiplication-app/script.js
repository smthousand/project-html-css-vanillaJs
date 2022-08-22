const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const formEl = document.querySelector('#form')
const inputEl = document.querySelector("#input")
const scoreEl = document.querySelector("#score")

let score = JSON.parse(localStorage.getItem('score'));

if(!score) {
    score = 0;
}

scoreEl.innerText = `점수 : ${score}`

const questionEl = document.querySelector('#question');
questionEl.innerText = `${num1} 곱하기 ${num2}은 무엇일까요?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if(userAns === correctAns) {score++; updateLocalStorage()} 
    else {score--; updateLocalStorage()}
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}

// 리셋 버튼 만들어보기
// 마이너스 일 때 색깔 변경해보기