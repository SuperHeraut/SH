const BODY = document.querySelector("body");

const VARS = document.createElement("script");
	VARS.setAttribute("src", "../js/variables.js");

const HDS = document.createElement("script");
	HDS.setAttribute("src", "../js/head.js");

const HDR = document.createElement("script");
	HDR.setAttribute("src", "../js/header.js");

const FTR = document.createElement("script");
	FTR.setAttribute("src", "../js/footer.js");

BODY.appendChild(VARS);
BODY.appendChild(HDS);
BODY.appendChild(HDR);
BODY.appendChild(FTR);
BODY.appendChild(MOD);