

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


// Funcionalidad boton top

$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#gotopdiv').fadeIn();
        } else {
            $('#gotopdiv').fadeOut();
        }
    });
    
    $('#gotopdiv').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
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
  $.ajax({
      dataType: "json",
      url: "testimonios.json",
      data: "data",
      success: function(response){
          for (let i=0; i<3; i++){
              let random = Math.floor(Math.random() * 7);
              $("label#nombre"+i.toString()).text(response.testimonios[random].nombre);
              $("p#testimonio"+i.toString()).text(response.testimonios[random].texto);
              $("p#fecha"+i.toString()).text(response.testimonios[random].fecha);
          }
      }
  })
  setTimeout(recogerTestimonios, 10000);
}

recogerTestimonios(); 



// Mostrar Productos

function mostrarProductos(){
  $.ajax({
      dataType: "json",
      url: "productos.json",
      data: "data",
      success: function(response){
          for (let i=0; i<3; i++){
              $("div#producto"+i.toString()).prepend('<img id="fotosproductos" src="'+response.productos[i].imagen+'" alt="'+response.productos[i].nombre+'"/>');
              $("div#producto"+i.toString()).prepend('<label id="nombreProductos">'+response.productos[i].nombre+'</label>');
              $("div#producto"+i.toString()).prepend('<label id="precioProductos">'+response.productos[i].precio+'</label>');
          }
      }
  })
}

mostrarProductos();




// animación aparecen productos y testimonios al hacer scroll


document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#producto > div').offsetTop;
         
     if (isVisible) {
       document.getElementById('producto').classList.add('animate');
    }
});



document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#testimonio > div').offsetTop;
         
     if (isVisible) {
       document.getElementById('testimonio').classList.add('animate');
    }
});


// Localización, la ciudad a veces falla





// // Cambiar vista de testimonios





var lista = false;

$( "#cambiarVista" ).click(function() {
   lista=!lista;
   if(lista){
    $(".testimonio").css("display","flex");
   }
   else{ 
    $(".testimonio").css("display","grid");
   }
 });