// footer

const FOOTER = document.querySelector("footer");
FOOTER.setAttribute("class", "blur");
const FOOTERCONTENT = document.createElement("div");
FOOTER.appendChild(FOOTERCONTENT);

const COPYRIGHT = document.createElement("span");
COPYRIGHT.setAttribute("id", "copy");
FOOTERCONTENT.appendChild(COPYRIGHT);
COPYRIGHT.innerHTML = "&copy;2024 SuperHéraut";

cond = document.createElement("a");
FOOTERCONTENT.appendChild(cond);
cond.setAttribute("href", "./cgu-cgv.html");


const SN = document.createElement("div");
SN.setAttribute("class", "snblock flex")
FOOTERCONTENT.appendChild(SN);

socNet = document.createElement("span");
SN.appendChild(socNet);

const INSTABLOCK = document.createElement("a");
INSTABLOCK.setAttribute("href", "https://www.instagram.com/superherautofficiel/");
INSTABLOCK.setAttribute("class", "snlink");
const PIXIVBLOCK = document.createElement("a");
PIXIVBLOCK.setAttribute("class", "snlink");
SN.appendChild(INSTABLOCK);
SN.appendChild(PIXIVBLOCK);

const INSTAOFF = document.createElement("img");
INSTAOFF.setAttribute("src", "./img/technical/ig-off.svg");
INSTAOFF.setAttribute("class", "snpic off")
INSTABLOCK.appendChild(INSTAOFF);
const INSTA = document.createElement("img");
INSTA.setAttribute("src", "./img/technical/ig.svg");
INSTA.setAttribute("class", "snpic on");
INSTABLOCK.appendChild(INSTA);

const PIXOFF = document.createElement("img");
PIXOFF.setAttribute("src", "./img/technical/p-off.svg");
PIXOFF.setAttribute("class", "rspic off");
PIXIVBLOCK.appendChild(PIXOFF);
const PIX = document.createElement("img");
PIX.setAttribute("src", "./img/technical/p.svg");
PIX.setAttribute("class", "rspic on");
PIXIVBLOCK.appendChild(PIX);

switch(langue){
	case "fr":
		cond.innerHTML = "mentions l&eacute;gales";
		socNet.innerHTML = "r&eacute;seaux sociaux&#58;";
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/en/users/85221465");
		break;
	case "en":
		cond.innerHTML = "legal notice";
		socNet.innerHTML = "social networks";
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/en/users/85221465");
		break;
	case "ja":
		cond.setAttribute("class", "jtext")
		cond.innerHTML = "利用規約 及び 個人情報使用方針";
		socNet.innerHTML = "SNS";
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/users/85221465");
		break;
	default:
		testinput = "?";
};