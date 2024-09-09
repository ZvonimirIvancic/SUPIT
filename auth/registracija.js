$(document).ready(function() {
    $('.registracijaBox').submit(function(e) {
      e.preventDefault();
  
      var data = {
        "username": $('#username').val(),
        "password": $('#password').val(),
      };
  
      $.ajax({
        type: 'POST',
        url: 'https://www.fulek.com/data/api/user/register',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
          if (response.isSuccess) {
            console.log("Registracija uspješna!");
            window.location.href = 'prijava.html';
  
          } else {
            console.log("Registracija nije uspjela: " + response.errorMessages);
          }
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });