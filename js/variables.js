// Variables à stocker ici et à réutiliser
const PAGELINK = location.pathname.split("/");
console.log(PAGELINK);
const PAGELOC = PAGELINK[PAGELINK.length - 1].split(".");
console.log(PAGELOC);
let pagename = PAGELOC[0];
if (pagename == 404){
	pagename = "nopage";
}
let langue = PAGELINK[PAGELINK.length - 2];
if (langue == "default"){
	langue = "zxx";
};
let page = document.querySelector("html").getAttribute("id");
let cond;
let socNet;
let testinput;
let inpoute;

const TITLE = document.createElement("title");
	HEAD.appendChild(TITLE);
HTML.setAttribute("id", pagename);
const HOMEPAGE = document.createElement("a");
const HEADER = document.querySelector("header");
const LOGOPORT = document.createElement("img");
const HEADERCONTENT = document.createElement("nav");
const LOGO = "../img/technical/logo.svg"
const FOOTER = document.querySelector("footer");
const FOOTERCONTENT = document.createElement("div");
const COPYRIGHT = document.createElement("span");
const SN = document.createElement("div");
const INSTABLOCK = document.createElement("a");
const PIXIVBLOCK = document.createElement("a");
const INSTAOFF = document.createElement("img");
const INSTA = document.createElement("img");
const PIXOFF = document.createElement("img");
const PIX = document.createElement("img");
const CONTACT = document.createElement("a");
const GALLERY = document.createElement("a");
const HISTORY = document.createElement("a");
const PRESENTATION = document.createElement("a");
const RESOURCES = document.createElement("a");
const CONTACTLINK = "contact";
const GALLERYLINK = "gallery";
const HISTORYLINK = "history";
const PRESENTATIONLINK = "presentation";
const RESOURCESLINK = "resources";
const LANGKIT = document.createElement("div");
const LANGKITFR = document.createElement("a");
const LANGKITEN = document.createElement("a");
const LANGKITJA = document.createElement("a");
const LANGFRIMG = document.createElement("img");
const LANGENIMG = document.createElement("img");
const LANGJAIMG = document.createElement("img");