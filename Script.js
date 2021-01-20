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

  if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test($(this).val()) && $(this).val() !== ""){
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

  if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test($(this).val()) && $(this).val() !== ""){
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

  if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test($(this).val()) && $(this).val() !== ""){
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


// Mostrar testimonios

function recogerTestimonios(){
  let aleatorio = Math.floor(Math.random() * 6);
  $.ajax({
      dataType: "json",
      url: "testimonios.json",
      data: "data",
      success: function(response){
          for (let i=1; i<=3; i++){
              let aleatorio = Math.floor(Math.random() * 7);
              $("div#testimonio"+i.toString()).text(response.testimonios[aleatorio].nombre);
          }
      }
  })
  setTimeout(recogerTestimonios, 10000);
}

// Mostrar Productos

function recogerProductos(){
  $.ajax({
      dataType: "json",
      url: "productos.json",
      data: "data",
      success: function(response){
          for (let i=0; i<3; i++){
              $("div#imagen"+i.toString()).prepend('<img id="imagen1" src="'+response.productos[i].imagen+'"/>');
          }
      }
  })
}