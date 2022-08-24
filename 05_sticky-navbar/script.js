const navbarEl = document.querySelector('.navbar');
const containerEl = document.querySelector('.container')

window.addEventListener('scroll', () => {
    if(window.scrollY > containerEl.offsetTop - navbarEl.offsetHeight) {
        // 스크롤 위치는 내려갈수록 커진다
        // 스크롤 위치 > 컨테이너의 top 좌표(컨테이너가 다 내려왔을 때) - navbar의 높이
        navbarEl.classList.add('active')
    } else {navbarEl.classList.remove('active')}
})