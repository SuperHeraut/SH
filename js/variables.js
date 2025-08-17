// constants

const HTML = document.querySelector("html");
const HEAD = document.querySelector("head");
const CHAR = document.createElement("meta");
const VP = document.createElement("meta");
const RESETCSS = document.createElement("link");
const SETCSS = document.createElement("link");

const PAGELINK = location.pathname.split("/");
const PAGELOC = PAGELINK[PAGELINK.length - 1].split(".");

const HEADER = document.querySelector("header");
	const HEADERCONTENT = document.createElement("nav");

const HEADERMENU = document.createElement("ul");
	const ITEMPRES = document.createElement("li");
	const ITEMHIST = document.createElement("li");
	const ITEMARMR = document.createElement("li");
	const ITEMRSRC = document.createElement("li");
	const ITEMCTCT = document.createElement("li");

const FOOTER = document.querySelector("footer");
const FOOTERCONTENT = document.createElement("div");

const HOMEPAGE = document.createElement("a");
const LOGOPORT = document.createElement("img");
	const LOGO = "../img/technical/logo.svg";

const TITLE = document.createElement("title");
const SN = document.createElement("div");
const INSTABLOCK = document.createElement("a");
const PIXIVBLOCK = document.createElement("a");
const CONTACT = document.createElement("a");
const GALLERY = document.createElement("a");
const HISTORY = document.createElement("a");
const PRESENTATION = document.createElement("a");

const COPYRIGHT = document.createElement("span");

const INSTAOFF = document.createElement("img");
const INSTA = document.createElement("img");
const PIXOFF = document.createElement("img");
const PIX = document.createElement("img");

const CONTACTLINK = "contact";
const GALLERYLINK = "gallery";
const HISTORYLINK = "history";
const PRESENTATIONLINK = "presentation";
const RESOURCESLINK = "resources";

const LANGKIT = document.createElement("div");
	const LANGKITFR = document.createElement("a");
	const LANGKITEN = document.createElement("a");
	const LANGKITJA = document.createElement("a");
	const RESOURCES = document.createElement("a");

const RESOURCESLIST = document.createElement("ul");
	const ITEMCHARGES = document.createElement("li");
	const ITEMTINCTURES = document.createElement("li");
	const ITEMDIVISIONS = document.createElement("li");
	const ITEMORDINARIES = document.createElement("li");
	const ITEMPOSITIONS = document.createElement("li");
	const ITEMSHIELDS = document.createElement("li");
	const CHARGES = document.createElement("a");
	const CHARGESLINK = "charges";
	const TINCTURES = document.createElement("a");
	const TINCTURESLINK = "tinctures";
	const DIVISIONS = document.createElement("a");
	const DIVISIONSLINK = "divisions";
	const ORDINARIES = document.createElement("a");
	const ORDINARIESLINK = "ordinaries";
	const POSITIONS = document.createElement("a");
	const POSITIONSLINK = "positions";
	const SHIELDS = document.createElement("a");
	const SHIELDSLINK = "shields";

const LANGFRIMG = document.createElement("img");
const LANGENIMG = document.createElement("img");
const LANGJAIMG = document.createElement("img");

//variabless

let pagename = PAGELOC[0];
let langue = PAGELINK[PAGELINK.length - 2];
let page = document.querySelector("html").getAttribute("id");
let cond;
let socNet;
if (pagename == 404){
	pagename = "nopage";
} else if (pagename == ""){
	pagename = "index";
}
if (langue == "default"){
	langue = "zxx";
};
	HEAD.appendChild(TITLE);
HTML.setAttribute("id", pagename);
