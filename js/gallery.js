
let indexPic = 0;
const PIC = document.querySelectorAll('#rollofarms div img');
const TOTALPIC = PIC.length;
const GALLERY = document.getElementById("gallery")

const openGallery = (event) => {
    if (event.target.localName === "img") {
        const CLICKINDEX = Array.from(PIC).indexOf(event.target);
        indexPic = CLICKINDEX;
        GALLERY.style.display = "flex";
        GALLERY.style.opacity = "1";
        updateGallery();
    }
}

const closeGallery = () => {
    GALLERY.style.display = "none";
    GALLERY.style.transition = "opacity 2000ms ease-in-out, visibility 2000ms ease-in-out";

}

const changePic = (direction) => {
    indexPic += direction;
    if (indexPic >= TOTALPIC) {
        indexPic = 0;
    } else if (indexPic < 0) {
        indexPic = TOTALPIC - 1;
    }
    updateGallery();
}

const updateGallery = () => {
    const galMainPic = document.getElementById("galMainPic");
    const thumbCont = document.getElementById("thumbCont");

    galMainPic.src = PIC[indexPic].src;
    thumbCont.innerHTML = "";

    PIC.forEach((image, index) => {
        const thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.classList.add("thumb");
        thumb.addEventListener("click", () => updateMainPic(index));
        thumbCont.appendChild(thumb);
        thumb.src = image.src;
    });

    const thumbnails = document.querySelectorAll(".thumb");
    thumbnails[indexPic].classList.add("activeThumb");
}

const updateMainPic = (index) => {
    indexPic = index;
    updateGallery();
}

updateGallery();

document.addEventListener("keydown", function (e) {
    if (document.getElementById("gallery").style.display === "flex") {
        if (e.key === "ArrowLeft") {
            changePic(-1);
        } else if (e.key === "ArrowRight") {
            changePic(1);
        }
    }
});