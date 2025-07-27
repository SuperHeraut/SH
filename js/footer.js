// footer

FOOTER.setAttribute("class", "redblur");
FOOTER.appendChild(FOOTERCONTENT);

COPYRIGHT.setAttribute("id", "copy");
FOOTERCONTENT.appendChild(COPYRIGHT);

cond = document.createElement("a");
FOOTERCONTENT.appendChild(cond);
cond.setAttribute("href", "../cgu-cgv.html");

SN.setAttribute("class", "snblock flex")
FOOTERCONTENT.appendChild(SN);

socNet = document.createElement("span");
SN.appendChild(socNet);

INSTABLOCK.setAttribute("href", "https://www.instagram.com/superherautofficiel/");
INSTABLOCK.setAttribute("target", "_blank");
INSTABLOCK.setAttribute("class", "snlink");
PIXIVBLOCK.setAttribute("class", "snlink");
SN.appendChild(INSTABLOCK);
SN.appendChild(PIXIVBLOCK);
if (pagename == "index"){INSTAOFF.setAttribute("src", "./img/technical/ig-off.svg");}
else{INSTAOFF.setAttribute("src", "../img/technical/ig-off.svg");}
INSTAOFF.setAttribute("class", "snpic off")
INSTABLOCK.appendChild(INSTAOFF);
if (pagename == "index"){INSTA.setAttribute("src", "./img/technical/ig.svg");}
else{INSTA.setAttribute("src", "../img/technical/ig.svg");}
INSTA.setAttribute("class", "snpic on");
INSTABLOCK.appendChild(INSTA);

if (pagename == "index"){PIXOFF.setAttribute("src", "./img/technical/p-off.svg");}
else{PIXOFF.setAttribute("src", "../img/technical/p-off.svg");}
PIXOFF.setAttribute("class", "rspic off");
PIXIVBLOCK.appendChild(PIXOFF);
if (pagename == "index"){PIX.setAttribute("src", "./img/technical/p.svg");}
else{PIX.setAttribute("src", "../img/technical/p.svg");}
PIX.setAttribute("class", "rspic on");
PIXIVBLOCK.appendChild(PIX);

switch(langue){
	case "fr":
		COPYRIGHT.innerHTML = "2024 SuperHéraut";
		cond.innerHTML = "mentions l&eacute;gales";
		socNet.innerHTML = "r&eacute;seaux sociaux&#58;";
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/en/users/85221465");
		PIXIVBLOCK.setAttribute("target", "_blank");
		break;
	case "en":
		COPYRIGHT.innerHTML = "&copy;2024 SuperHéraut";
		cond.innerHTML = "legal notice";
		socNet.innerHTML = "social networks";
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/en/users/85221465");
		PIXIVBLOCK.setAttribute("target", "_blank");
		break;
	case "ja":
		COPYRIGHT.innerHTML = "&copy;&#13055;6年 SuperHéraut";
		cond.setAttribute("class", "jtext")
		cond.innerHTML = "利用規約 及び 個人情報使用方針";
		socNet.innerHTML = "SNS";
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/users/85221465");
		PIXIVBLOCK.setAttribute("target", "_blank");
		break;
	default:
		PIXIVBLOCK.setAttribute("href", "https://www.pixiv.net/users/85221465");
		PIXIVBLOCK.setAttribute("target", "_blank");
};