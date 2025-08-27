
indexPic = 0;

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
	const GALMAINPIC = document.getElementById("galMainPic");
	const THUMBCONT = document.getElementById("thumbCont");

	GALMAINPIC.src = PIC[indexPic].src;
	THUMBCONT.innerHTML = "";

	PIC.forEach((image, index) => {
		const THUMB = document.createElement("img");
		THUMB.src = image.src;
		THUMB.alt = `Thumbnail ${index + 1}`;
		THUMB.classList.add("thumb");
		THUMB.addEventListener("click", () => updateMainPic(index));
		THUMBCONT.appendChild(THUMB);
		THUMB.src = image.src;
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