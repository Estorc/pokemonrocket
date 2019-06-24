	function changer() {

	variable = Math.floor(Math.random() * 3)
	document.getElementById("jasmine").style.opacity = "1.0";
	if (variable == 0) {
	document.getElementById('jasmine').innerHTML = '<p class="speech">Coucou ! Je suis Jasmine ton assistante sur ce site !<br/><input type="button" onclick="cacher()" value="OK" /></p>';
	}
	if (variable == 1) {
	document.getElementById('jasmine').innerHTML = '<p class="speech">Toutes les versions du jeu sont disponible dans la section téléchargement.<br/><input type="button" onclick="cacher()" value="OK" /></p>';
	}
	if (variable == 2) {
	document.getElementById('jasmine').innerHTML = '<p class="speech">N\'hésite pas à faire un tour dans notre chaîne : N.A.G Corporation.<br/><input type="button" onclick="cacher()" value="OK" /></p>';
	}


	}