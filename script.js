let toggleBtn = document.querySelector(".toggleBtn");
let cuerpo = document.querySelector(".cuerpo");
let container = document.querySelector(".container");
let toggle = document.querySelector(".toggle");
var parte1 = document.querySelector(".iftheworld");
let elemento = document.getElementById("elemento");
let parte2 = document.getElementById("elemento1");
let parte3 = document.getElementById("elemento2");
let parte4 = document.getElementById("elemento3");
let parte5 = document.getElementById("elemento4");
let flechader = document.querySelector(".icon");
let flechaizq = document.querySelector(".iconn");
let playbtn = document.querySelector(".btn");
let musicaScarface = false;
let musicaIftheworld = false;
let musicaInthestars = false;
let audioInthestars = new Audio("./inthestars.mp3");
let audioIftheworld = new Audio("./cancion.mp3");
let audioScarface = new Audio("./scarface.mp3");

toggleBtn.onclick = function () {
	container.classList.toggle("active");
};

toggle.onclick = function () {
	container.classList.toggle("activee");
	if (container.classList.contains("activee")) {
		setTimeout(function () {
			elemento.classList.add("oculto");
		}, 68000);
		setTimeout(function () {
			parte2.classList.add("visto");
		}, 133000);

		setTimeout(function () {
			parte3.classList.add("abierto");
		}, 134000);

		setTimeout(function () {
			parte4.classList.add("cerrado");
		}, 121000);
		setTimeout(function () {
			parte5.classList.add("medio");
		}, 122000);
	} else {
		parte1.classList.remove("oculto");
		parte2.classList.remove("visto");
		parte3.classList.remove("abierto");
		parte4.classList.remove("cerrado");
		parte5.classList.remove("medio");
	}
};
let posicion = 0;
flechader.onclick = function () {
	if (container.classList.contains("cambio")) {
		container.classList.toggle("cambio2");
		container.classList.remove("cambio");
		cuerpo.classList.remove("cambio");
	} else if (container.classList.contains("cambio2")) {
		container.classList.remove("cambio2");
		posicion--;
	} else {
		container.classList.toggle("cambio");
		cuerpo.classList.add("cambio");
		posicion++;
	}
};

flechaizq.onclick = function () {
	if (posicion == 0) {
		container.classList.toggle("cambio2");
		posicion++;
	} else if (container.classList.contains("cambio2")) {
		container.classList.remove("cambio2");
		container.classList.toggle("cambio");
		cuerpo.classList.add("cambio");
	} else {
		container.classList.remove("cambio");
		cuerpo.classList.remove("cambio");
		posicion--;
	}
};
function pausemusicIftheworld() {
	audioIftheworld;
	audioIftheworld.pause();
	musicaIftheworld = false;
}

function playmusicIftheworld() {
	if (musicaIftheworld == false) {
		audioIftheworld;
		audioIftheworld.play();
		musicaIftheworld = true;
	} else if (musicaIftheworld == true) {
		pausemusicIftheworld();
		musicaIftheworld = false;
	}
}

function pausemusicScarface() {
	audioScarface;
	audioScarface.pause();
	musicaScarface = false;
}

function playmusic() {
	if (musicaScarface == false) {
		audioScarface;
		audioScarface.play();
		musicaScarface = true;
	} else if (musicaScarface == true) {
		pausemusicScarface();
		musicaScarface = false;
	}
}
function pausemusicInthestars() {
	audioInthestars;
	audioInthestars.pause();
	musicaInthestars = false;
}

function playmusicInthestars() {
	if (musicaInthestars == false) {
		audioInthestars;
		audioInthestars.play();
		musicaInthestars = true;
	} else if (musicaInthestars == true) {
		pausemusicInthestars();
		musicaInthestars = false;
	}
}

playbtn.onclick = function () {
	if (container.classList.contains("cambio")) {
		playmusic();
		pausemusicIftheworld();
		pausemusicInthestars();
	} else if (container.classList.contains("cambio2")) {
		playmusicInthestars();
		pausemusicScarface();
		pausemusicIftheworld();
	} else {
		playmusicIftheworld();
		pausemusicScarface();
		pausemusicInthestars();
	}
};
