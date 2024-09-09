$('#logout-btn').click(function() {
    localStorage.removeItem("token");
    window.location.href = 'prijava.html';
  });
  $(document).ready(function() {
    if (localStorage.getItem("token")) {
      $('.nistePrijavljeni').hide();
    $('ispisTextaZaPrijavuKorisnika').show();
    $('#imeKorisnika').show();
      $('.prijava').hide();
      $('#nastavni_plan').show();
      $('#logout-btn').show();
    } else {
      localStorage.removeItem("imeKorisnika");
    $('.ispisTextaZaPrijavuKorisnika').hide();
    $('#imeKorisnika').hide();
      $('#nastavni_plan').hide();
      $('#logout-btn').hide();
    }
  });
