var recenica = "Dobar dan profesore, kako Ste danas?";
  var PoljeRecenice = recenica.split(" ");
  var trenutnaRecenica = 0;
  var trenutnoSlovo = 0;
  var brzina;

  function typeWriter() {
    if (trenutnaRecenica < PoljeRecenice.length) {
      if (trenutnoSlovo < PoljeRecenice[trenutnaRecenica].length) {
        document.getElementById("pisajuciText").innerHTML += PoljeRecenice[trenutnaRecenica][trenutnoSlovo];
        trenutnoSlovo++;
      } else {
        document.getElementById("pisajuciText").innerHTML += " ";
        trenutnoSlovo = 0;
        trenutnaRecenica++;
      }
    } else {
      trenutnaRecenica = 0;
      trenutnoSlovo = 0;
      document.getElementById("pisajuciText").innerHTML = "";
    }
  }

  brzina = setInterval(typeWriter, 150); 