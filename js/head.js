
CHAR.setAttribute("charset", "UTF-8");
VP.setAttribute("name", "viewport");
VP.setAttribute("content", "width=device-width, initial-scale=1.0");
RESETCSS.setAttribute("rel", "stylesheet");
SETCSS.setAttribute("rel", "stylesheet");
if(pagename == "index"){
	RESETCSS.setAttribute("href", "./css/reset.css");
	SETCSS.setAttribute("href", "./css/style.css");
}else{
	RESETCSS.setAttribute("href", "../css/reset.css");
	SETCSS.setAttribute("href", "../css/style.css");
};
TITLE.innerHTML ="SuperH&eacute;raut";

HEAD.appendChild(CHAR);
HEAD.appendChild(VP);
HEAD.appendChild(RESETCSS);
HEAD.appendChild(SETCSS);