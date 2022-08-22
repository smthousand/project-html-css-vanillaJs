const hour = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const time = document.querySelector('#time');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let t = "AM";

    if ( h > 12 ) {
        h = h - 12
        t = "PM"
    }

    h = h < 10 ? "0" + h : h; // 조건 ? A(true) : B(false)
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    time.innerText = t;

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();