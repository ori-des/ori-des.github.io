const leftScrollBtn = document.getElementById('left-scroll');
const rightScrollBtn = document.getElementById('right-scroll');
const img = document.getElementById('image');

leftScrollBtn.addEventListener('click', scroll);
rightScrollBtn.addEventListener('click', scroll);

let counter = 2;

function scroll(event) {
    let src = img.src;
    let idk = src.split("/")
    let directory = "/photography/photos/" +  idk[idk.length - 2];
    let nextImg = idk[idk.length - 2] + counter + ".jpg";
    console.log(directory, nextImg);

    if (counter > 18) {
        return;
    }

    if(event.target == leftScrollBtn && counter > 2) {
        console.log(counter);
    } else if(event.target == rightScrollBtn) {
        img.src = directory + "/" + nextImg;
        counter++
    }
}