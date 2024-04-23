// navbar dynamique

const HEADER = document.querySelector("header");
HEADER.setAttribute("class", "blur");
const HEADERCONTENT = document.createElement("nav");
HEADER.appendChild(HEADERCONTENT);
inpoute = document.createElement("span")
HEADERCONTENT.appendChild(inpoute)
switch(langue){
	case "fr":
		testinput = "ceci est un test";
		break;
	case "en":
		testinput = "this is a test";
		break;
	case "ja":
		testinput = "テストです";
		break;
	default:
		testinput = "?";
};
inpoute.innerHTML = testinput;