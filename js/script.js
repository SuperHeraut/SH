const HTML = document.querySelector("html");
const HEAD = document.querySelector("head");
	const CHAR = document.createElement("meta");
		CHAR.setAttribute("charset", "UTF-8");
	const VP = document.createElement("meta");
		VP.setAttribute("name", "viewport");
		VP.setAttribute("content", "width=device-width, initial-scale=1.0");
	const RESETCSS = document.createElement("link");
		RESETCSS.setAttribute("rel", "stylesheet");
		RESETCSS.setAttribute("href", "../css/reset.css");
	const SETCSS = document.createElement("link");
		SETCSS.setAttribute("rel", "stylesheet");
		SETCSS.setAttribute("href", "../css/style.css");
HEAD.appendChild(CHAR);
HEAD.appendChild(VP);
HEAD.appendChild(RESETCSS);
HEAD.appendChild(SETCSS);
const BODY = document.querySelector("body");
	const VARS = document.createElement("script");
		VARS.setAttribute("src", "../js/variables.js");
	const NBR = document.createElement("script");
		NBR.setAttribute("src", "../js/navbar.js");
	const FTR = document.createElement("script");
		FTR.setAttribute("src", "../js/footer.js");
BODY.appendChild(VARS);
BODY.appendChild(NBR);
BODY.appendChild(FTR);