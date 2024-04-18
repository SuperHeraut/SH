// navbar dynamique

const HEADER = document.querySelector("header");
HEADER.setAttribute("class", "blur");
const HEADERCONTENT = document.createElement("nav");
HEADER.appendChild(HEADERCONTENT);

// footer

const FOOTER = document.querySelector("footer");
FOOTER.setAttribute("class", "blur");
const FOOTERCONTENT = document.createElement("div");
FOOTER.appendChild(FOOTERCONTENT);

const COPYRIGHT = document.createElement("span");
COPYRIGHT.setAttribute("id", "copy");
FOOTERCONTENT.appendChild(COPYRIGHT);
COPYRIGHT.innerHTML = "&copy;2024 SuperHéraut";

const COND = document.createElement("a");
FOOTERCONTENT.appendChild(COND);
COND.setAttribute("href", "./cgu-cgv.html");
COND.innerHTML = "mentions l&eacute;gales";


const SN = document.createElement("div");
SN.setAttribute("class", "snblock flex")
FOOTERCONTENT.appendChild(SN);

const SOCNET = document.createElement("span");
SN.appendChild(SOCNET);
SOCNET.innerHTML = "r&eacute;seaux sociaux&#58;";

const INSTABLOCK = document.createElement("a");
INSTABLOCK.setAttribute("href", "https://www.instagram.com/superherautofficiel/");
INSTABLOCK.setAttribute("class", "snlink");
const PIXIVBLOCK = document.createElement("a");
PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/en/users/85221465");
PIXIVBLOCK.setAttribute("class", "snlink");
SN.appendChild(INSTABLOCK);
SN.appendChild(PIXIVBLOCK);

const INSTAOFF = document.createElement("img");
INSTAOFF.setAttribute("src", "../img/technical/ig-off.svg");
INSTAOFF.setAttribute("class", "snpic off")
INSTABLOCK.appendChild(INSTAOFF);
const INSTA = document.createElement("img");
INSTA.setAttribute("src", "../img/technical/ig.svg");
INSTA.setAttribute("class", "snpic on");
INSTABLOCK.appendChild(INSTA);

const PIXOFF = document.createElement("img");
PIXOFF.setAttribute("src", "../img/technical/p-off.svg");
PIXOFF.setAttribute("class", "rspic off");
PIXIVBLOCK.appendChild(PIXOFF);
const PIX = document.createElement("img");
PIX.setAttribute("src", "../img/technical/p.svg");
PIX.setAttribute("class", "rspic on");
PIXIVBLOCK.appendChild(PIX);

