$(document).ready(function() {
    $('.loginBox').submit(function(e) {
      e.preventDefault();

      var data = {
        "username": $('#username').val(),
        "password": $('#password').val()
      };
  
      // pozovi api
      $.ajax({
        type: 'POST',
        url: 'https://www.fulek.com/data/api/user/login',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
          if (response.isSuccess) {
            console.log("Uspješna prijava!");
            $(".Poruka").append(`<p class="porukaUspjeha">Uspješna prijava. Pričekajte...</p>`);

            localStorage.setItem("token", response.data.token);

            window.location.href = 'pocetna.html';
          } else {
            console.log("Prijava nije uspjela: " + response.errorMessages);
            $(".Poruka").append(`<p class="porukaFail">Ime ili lozinka nije valjana.</p>`);
            
          }
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });