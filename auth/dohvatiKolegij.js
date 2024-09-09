// dohvati podatke(kolegije) sa stranice 
let DohvatiKolegije = [];
    
// spremi token kad se korisnik logina
const token = localStorage.getItem("token");

fetch(`https://www.fulek.com/data/api/supit/curriculum-list/hr`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => {
      if(!response.ok) throw new Error("Nije uspio prijenos");
      return response.json()
  })
  .then(data => {
    DohvatiKolegije = data;

    let SviKolegijiPolje = DohvatiKolegije.data;
    // autocomplete
    $("#autocomplete-input").autocomplete({
      source: SviKolegijiPolje.map(kolegij => kolegij.kolegij),
     select: function(event, ui) {
        // pronađi odabrani kolegij
        let selectedCourse = SviKolegijiPolje.find(kolegij => kolegij.kolegij === ui.item.value);
        // dodaj odabrani kolegij u tablicu
        let suma = 0;

        if(window.innerWidth <= 600 ){
          $("#kolegij-details-body").append(`
          <tr>
            <td>ID:    ${selectedCourse.id}</td>
            <td>KOLEGIJ:   ${selectedCourse.kolegij}</td>
            <td>ECTS:  ${selectedCourse.ects}</td>
            <td>SATI:   ${selectedCourse.sati}</td>
            <td>PREDAVANJA:   ${selectedCourse.predavanja}</td>
            <td>VJEŽBE:   ${selectedCourse.vjezbe}</td>
            <td>TIP:    ${selectedCourse.tip}</td>
            <td>SEMESTAR:   ${selectedCourse.semestar}</td>
            <td><button class="Obrisi-gumb">Obriši</button></td>
          </tr>
        `);
        }
        else{
        $("#kolegij-details-body").append(`
          <tr>
            <td>${selectedCourse.id}</td>
            <td>${selectedCourse.kolegij}</td>
            <td>${selectedCourse.ects}</td>
            <td>${selectedCourse.sati}</td>
            <td>${selectedCourse.predavanja}</td>
            <td>${selectedCourse.vjezbe}</td>
            <td>${selectedCourse.tip}</td>
            <td>${selectedCourse.semestar}</td>
            <td><button class="Obrisi-gumb">Obriši</button></td>
          </tr>
        `);
        }
        $("#autocomplete-input").val("");
        updateTotal();
      }
    });
    $("#kolegij-details-body").on("click", ".Obrisi-gumb", function() {
      $(this).closest("tr").remove();
      updateTotal();
    });
    function updateTotal() {
      let totalECTS = 0;
      let totalSATI = 0;
      let totalPREDAVANJA = 0;
      let totalVJEZBE = 0;
     
      $("#kolegij-details-body tr").each(function() {
        totalECTS += parseInt($(this).find("td:nth-child(3)").text().replace(/\D/g, ''));
totalSATI += parseInt($(this).find("td:nth-child(4)").text().replace(/\D/g, ''));
totalPREDAVANJA += parseInt($(this).find("td:nth-child(5)").text().replace(/\D/g, ''));
totalVJEZBE += parseInt($(this).find("td:nth-child(6)").text().replace(/\D/g, ''));

      });
   
      if (window.innerWidth <= 600) {
        $("#total-ects").text('Ects: ' + totalECTS);
        $("#total-sati").text('Sati: ' + totalSATI);
        $("#total-predavanja").text('Predavanja: ' + totalPREDAVANJA);
        $("#total-vjezbe").text('Vježbe: ' + totalVJEZBE);
      }
      else{
        $("#total-ects").text(totalECTS);
        $("#total-sati").text( totalSATI);
        $("#total-predavanja").text( totalPREDAVANJA);
        $("#total-vjezbe").text( totalVJEZBE);
      }
   
    }
  });