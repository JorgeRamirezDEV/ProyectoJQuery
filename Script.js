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


// Validar formulario

$("input#nombre").keydown(function(){

  if(/^[a-zA-Z]*$/.test($(this).val()) && $(this).val() !== ""){
      console.log("funciona");
      $(this).css("border", "2px solid green");
      $("input#apellido").prop("disabled", false);
  }else{
      console.log("error");
      $(this).css("border", "2px solid red");
      $("input#apellido").prop("disabled", true);
  }

})

$("input#apellido").keydown(function(){

  if(/^[a-zA-Z]*$/.test($(this).val()) && $(this).val() !== ""){
      $(this).css("border", "2px solid green");
      $("input#email").prop("disabled", false);
  }else{
      $(this).css("border", "2px solid red");
      $("input#email").prop("disabled", true);
  }

})


$("input#email").keydown(function(){

  if(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($(this).val()) && $(this).val() !== ""){
      $(this).css("border", "2px solid green");
      $("input#pais").prop("disabled", false);
  }else{
      $(this).css("border", "2px solid red");
      $("input#pais").prop("disabled", true);
  }

})

$("input#pais").keydown(function(){

  if(/^[a-zA-Z]*$/.test($(this).val()) && $(this).val() !== ""){
      $(this).css("border", "2px solid green");
      $("input#edad").prop("disabled", false);
  }else{
      $(this).css("border", "2px solid red");
      $("input#edad").prop("disabled", true);
  }

})

$("input#edad").keydown(function(){

  if(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.test($(this).val()) && $(this).val() !== ""){
      $(this).css("border", "2px solid green");
      $("input#enviar").prop("disabled", false);
  }else{
      $(this).css("border", "2px solid red");
      $("input#enviar").prop("disabled", true);
  }

})