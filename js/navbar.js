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
TITLE.innerHTML ="SuperHéraut";
switch(langue){
	case "fr":
		CONTACT.innerHTML ="contact";
		GALLERY.innerHTML ="armorial";
		HISTORY.innerHTML ="histoire";
		PRESENTATION.innerHTML ="pr&eacute;sentation";
		RESOURCES.innerHTML ="ressources";
		break;
	case "en":
		CONTACT.innerHTML ="contact";
		GALLERY.innerHTML ="roll of arms";
		HISTORY.innerHTML ="history";
		PRESENTATION.innerHTML ="presentation";
		RESOURCES.innerHTML ="resources";
		break;
	case "ja":
		HEADER.setAttribute("class", "jtext");
		CONTACT.innerHTML ="連絡";
		GALLERY.innerHTML ="紋章集";
		HISTORY.innerHTML ="歴史";
		PRESENTATION.innerHTML ="紋章とは";
		RESOURCES.innerHTML ="資源物";
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