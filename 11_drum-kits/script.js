const kits = ['snare', 'kick', 'crash', 'tom'];
const containerEl = document.querySelector('.container');

kits.forEach(kit => {
    const btnEl = document.createElement('button');
    containerEl.appendChild(btnEl);
    btnEl.innerText = kit;

    const audioEl = document.createElement('audio');
    containerEl.appendChild(audioEl);
    audioEl.src = `sounds/${kit}.mp3`;

    btnEl.addEventListener('click', () => {
        audioEl.play();
    })

    window.addEventListener('keydown', (evt) => {
        if(evt.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.background = 'linear-gradient(145deg, #cbcfd4, #f1f6fb)';
            btnEl.style.boxShadow = '13px 13px 26px #b0b3b7, -13px -13px 26px #ffffff';
            setTimeout(() => {
                btnEl.style.background = '#E1E6EB';
            }, 100);
        } 
    })
})