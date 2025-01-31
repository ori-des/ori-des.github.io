const leftScrollBtn = document.getElementById('left-scroll');
const rightScrollBtn = document.getElementById('right-scroll');
const img = document.getElementById('image');

leftScrollBtn.addEventListener('click', scroll);
rightScrollBtn.addEventListener('click', scroll);

let counter = 1;

function scroll(event) {
    let src = img.src;
    let gallery = src.split("/")
    let directory = "/photography/photos/" +  gallery[gallery.length - 2];

    if (event.target == leftScrollBtn && counter > 1) {
        counter--
    } else if (event.target == rightScrollBtn && counter < 18) {
        counter++
    }

    let nextImg = gallery[gallery.length - 2] + counter + ".jpg";
    img.src = directory + "/" + nextImg;
}