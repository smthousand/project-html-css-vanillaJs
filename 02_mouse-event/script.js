const mousePointer = document.querySelector('#mouse-pointer');
const clickElements = document.querySelectorAll('a, button, input');

// const mouseEventHandler = {
//     mouseMove: function(evt) {
//         let x = evt.pageX;
//         let y = evt.pageY;
//         mousePointer.style.left = `${x}px`;
//         mousePointer.style.top = `${y}px`;
//     },
//     mouseOver: function() {
//         mousePointer.classList.add('hover');
//     },
//     mouseLeave: function() {
//         mousePointer.classList.remove('hover')
//     }
// }

const mouseMove = (evt) => {
    let x = evt.pageX;
    let y = evt.pageY;
    mousePointer.style.left = `${x}px`;
    mousePointer.style.top = `${y}px`;
}

const mouseOver = () => {mousePointer.classList.add('hover');}
const mouseLeave = () => {mousePointer.classList.remove('hover');}

window.addEventListener('mousemove', mouseMove);
clickElements.forEach(elme => {elme.addEventListener('mouseover', mouseOver);});
clickElements.forEach(elme => {elme.addEventListener('mouseleave', mouseLeave);});