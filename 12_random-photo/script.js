const imgContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');
// let imgNum = 0;

btnEl.addEventListener("click", () => {
    imgNum = 3;
    addNewImgs();
  });

function addNewImgs() {
    for (let i = 0; i < imgNum; i++) {
        const newImgEl = document.createElement('img');
        newImgEl.src = `https://picsum.photos/140/140?random=${Math.floor(Math.random() * 100)}`;
        imgContainerEl.appendChild(newImgEl);
    }
}