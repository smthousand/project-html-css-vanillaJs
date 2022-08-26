// 배경화면 움직이기
function randomBackground() {
    let random = Math.floor(Math.random() * 6);
    let backgroundImg = ['url("images/bg01.jpeg")', 'url("images/bg02.jpeg")', 'url("images/bg03.jpeg")', 'url("images/bg04.jpeg")', 'url("images/bg05.jpeg")', 'url("images/bg06.jpeg")'];
    document.querySelector('body').style.backgroundImage = backgroundImg[random];
    setTimeout(() => {
        randomBackground()
    }, 5000);
}

randomBackground()

// 영화 예고편 팝업
const TrailerBtnEl = document.querySelector('.btn-border');
const colseIconEl = document.querySelector('.trailer-container > img');
const trailerContainerEl = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

TrailerBtnEl.addEventListener('click', () => {
    trailerContainerEl.classList.remove('active');
})

colseIconEl.addEventListener('click', () => {
    trailerContainerEl.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
})
