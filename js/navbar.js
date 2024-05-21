// navbar dynamique
HEADER.setAttribute("class", "blur");
HOMEPAGE.setAttribute("href", "../" + langue + "/home.html");
HEADER.appendChild(HOMEPAGE);
HOMEPAGE.appendChild(LOGOPORT);
HOMEPAGE.setAttribute("id", "logo");
LOGOPORT.setAttribute("src", LOGO);
HEADER.appendChild(HEADERCONTENT);
inpoute = document.createElement("span");
HEADERCONTENT.appendChild(PRESENTATION);
HEADERCONTENT.appendChild(HISTORY);
HEADERCONTENT.appendChild(GALLERY);
HEADERCONTENT.appendChild(RESOURCES);
HEADERCONTENT.appendChild(CONTACT);
HEADERCONTENT.appendChild(LANGKIT);
LANGKIT.appendChild(LANGKITFR);
LANGKIT.appendChild(LANGKITEN);
LANGKIT.appendChild(LANGKITJA);
LANGKIT.setAttribute("id", "langmenu");
LANGKITFR.appendChild(LANGFRIMG);
LANGKITEN.appendChild(LANGENIMG);
LANGKITJA.appendChild(LANGJAIMG);
TITLE.innerHTML ="SuperHéraut";
switch(langue){
	case "fr":
		CONTACT.innerHTML ="contact";
		GALLERY.innerHTML ="armorial";
		HISTORY.innerHTML ="histoire";
		PRESENTATION.innerHTML ="pr&eacute;sentation";
		RESOURCES.innerHTML ="ressources";
		LANGKITFR.setAttribute("class", "nodisp");
		LANGKITEN.setAttribute("href", "../en/" + pagename + ".html");
		LANGKITJA.setAttribute("href", "../ja/" + pagename + ".html");
		LANGENIMG.setAttribute("src", "../img/technical/en.svg");
		LANGJAIMG.setAttribute("src", "../img/technical/ja.svg");
		LANGENIMG.setAttribute("class", "langicon");
		LANGJAIMG.setAttribute("class", "langicon");
		break;
	case "en":
		CONTACT.innerHTML ="contact";
		GALLERY.innerHTML ="roll of arms";
		HISTORY.innerHTML ="history";
		PRESENTATION.innerHTML ="presentation";
		RESOURCES.innerHTML ="resources";
		LANGKITEN.setAttribute("class", "nodisp");
		LANGKITFR.setAttribute("href", "../fr/" + pagename + ".html");
		LANGKITJA.setAttribute("href", "../ja/" + pagename + ".html");
		LANGFRIMG.setAttribute("src", "../img/technical/fr.svg");
		LANGJAIMG.setAttribute("src", "../img/technical/ja.svg");
		LANGFRIMG.setAttribute("class", "langicon");
		LANGJAIMG.setAttribute("class", "langicon");
		break;
	case "ja":
		HEADER.setAttribute("class", "jtext");
		CONTACT.innerHTML ="連絡";
		GALLERY.innerHTML ="紋章集";
		HISTORY.innerHTML ="歴史";
		PRESENTATION.innerHTML ="紋章とは";
		RESOURCES.innerHTML ="資源物";
		LANGKITJA.setAttribute("class", "nodisp");
		LANGKITFR.setAttribute("href", "../fr/" + pagename + ".html");
		LANGKITEN.setAttribute("href", "../en/" + pagename + ".html");
		LANGFRIMG.setAttribute("src", "../img/technical/fr.svg");
		LANGENIMG.setAttribute("src", "../img/technical/en.svg");
		LANGFRIMG.setAttribute("class", "langicon");
		LANGENIMG.setAttribute("class", "langicon");
		break;
};
switch(pagename){
	case CONTACTLINK:
		CONTACT.setAttribute("id", "active");
		GALLERY.setAttribute("href", "../" + langue + "/" + GALLERYLINK + ".html");
		HISTORY.setAttribute("href", "../" + langue + "/" + HISTORYLINK + ".html");
		PRESENTATION.setAttribute("href", "../" + langue + "/" + PRESENTATIONLINK + ".html");
		RESOURCES.setAttribute("href", "../" + langue + "/" + RESOURCESLINK + ".html");
		break;
	case GALLERYLINK:
		CONTACT.setAttribute("href", "../" + langue + "/" + CONTACTLINK + ".html");
		GALLERY.setAttribute("id", "active");
		HISTORY.setAttribute("href", "../" + langue + "/" + HISTORYLINK + ".html");
		PRESENTATION.setAttribute("href", "../" + langue + "/" + PRESENTATIONLINK + ".html");
		RESOURCES.setAttribute("href", "../" + langue + "/" + RESOURCESLINK + ".html");
		break;
	case HISTORYLINK:
		CONTACT.setAttribute("href", "../" + langue + "/" + CONTACTLINK + ".html");
		GALLERY.setAttribute("href", "../" + langue + "/" + GALLERYLINK + ".html");
		HISTORY.setAttribute("id", "active");
		PRESENTATION.setAttribute("href", "../" + langue + "/" + PRESENTATIONLINK + ".html");
		RESOURCES.setAttribute("href", "../" + langue + "/" + RESOURCESLINK + ".html");
		break;
	case PRESENTATIONLINK:
		CONTACT.setAttribute("href", "../" + langue + "/" + CONTACTLINK + ".html");
		GALLERY.setAttribute("href", "../" + langue + "/" + GALLERYLINK + ".html");
		HISTORY.setAttribute("href", "../" + langue + "/" + HISTORYLINK + ".html");
		PRESENTATION.setAttribute("id", "active");
		RESOURCES.setAttribute("href", "../" + langue + "/" + RESOURCESLINK + ".html");
		break;
	case RESOURCESLINK:
		CONTACT.setAttribute("href", "../" + langue + "/" + CONTACTLINK + ".html");
		GALLERY.setAttribute("href", "../" + langue + "/" + GALLERYLINK + ".html");
		HISTORY.setAttribute("href", "../" + langue + "/" + HISTORYLINK + ".html");
		PRESENTATION.setAttribute("href", "../" + langue + "/" + PRESENTATIONLINK + ".html");
		RESOURCES.setAttribute("id", "active");
		break;
	default:
		CONTACT.setAttribute("href", "../" + langue + "/" + CONTACTLINK + ".html");
		GALLERY.setAttribute("href", "../" + langue + "/" + GALLERYLINK + ".html");
		HISTORY.setAttribute("href", "../" + langue + "/" + HISTORYLINK + ".html");
		PRESENTATION.setAttribute("href", "../" + langue + "/" + PRESENTATIONLINK + ".html");
		RESOURCES.setAttribute("href", "../" + langue + "/" + RESOURCESLINK + ".html");
};