const heroEl = document.querySelector('.hero');
const videoEl = document.querySelector('video');

window.addEventListener('scroll', () => {
    if (window.scrollY > heroEl.offsetTop) {
        heroEl.style.opacity = 1 - window.pageYOffset/800; 
        // 페이지를 내릴수록 Y값이 커짐. Y값이 커질 수록 800을 나눴을 때 큰 수가 되기 때문에 1에서 그 값을 빼면 0이 됨 => 흐려짐 
        videoEl.muted = true;
    } else {
        videoEl.muted = false;
    }
})