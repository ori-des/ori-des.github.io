const leftScrollBtn = document.getElementById('left-scroll');
const rightScrollBtn = document.getElementById('right-scroll');

leftScrollBtn.addEventListener('click', scroll);
rightScrollBtn.addEventListener('click', scroll);


function scroll(event) {
    if(event.target == leftScrollBtn) {
        console.log('scrolling left');
    } else {
        console.log('scrolling right');
    }
}