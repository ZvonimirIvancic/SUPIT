  var mojaGalerija = document.getElementById("mojaGalerija");
  
  var galerija = document.getElementById("galerija"); 
  
    galerija.onclick = function() {
    mojaGalerija.style.display = "block";
}

window.onclick = function(event) {
if (event.target == mojaGalerija) {
mojaGalerija.style.display = "none";
}
}

// funkcijonalnost za prije i poslje gumbe kada mijenjamo sliku
var slike = ["../slike/galerija2.jpg", "../slike/novost1.jpg"]; // ovdje dodaj url slike za galeriju
var currentIndex = 0;

document.getElementById("prijeVanGalerije").addEventListener("click", function() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = slike.length - 1;
}
document.getElementById("trenutnaSlika").src = slike[currentIndex];


});
document.getElementById("prijeUnutarPregleda").addEventListener("click", function() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = slike.length - 1;
}
document.getElementById("trenutnaSlikaUPregledu").src = slike[currentIndex];

});

document.getElementById("poslijeVanGalerije").addEventListener("click", function() {
currentIndex++;
if (currentIndex >= slike.length) {
currentIndex = 0;
}
document.getElementById("trenutnaSlika").src = slike[currentIndex];
});
document.getElementById("poslijeUnutarPregleda").addEventListener("click", function() {
currentIndex++;
if (currentIndex >= slike.length) {
currentIndex = 0;
}
document.getElementById("trenutnaSlikaUPregledu").src = slike[currentIndex];
});

