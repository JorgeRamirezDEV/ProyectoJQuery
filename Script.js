// Esta es la función del banner de arriba

$("#diapositiva > div:gt(0)").hide();

setInterval(function() { 
  $('#diapositiva > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#diapositiva');
},  5000);




// Esta es la lógica detrás del botón de volver al inicio de la página

$(function () {
  $("#gotopdiv").on("click", function () {
      $("html, body").animate({
          scrollTop: 0
      }, 200);
  });
});


// Esta es la animación

$(function () {
  $(window).scroll(function() {
      if ($(this).scrollTop() - 200 > 0) {
          $('#gotopdiv').stop().slideDown('fast');
      } else {
          $('#gotopdiv').stop().slideUp('fast');
      }
  });
});