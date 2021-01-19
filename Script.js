$("#diapositiva > div:gt(0)").hide();

setInterval(function() { 
  $('#diapositiva > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#diapositiva');
},  5000);


$(function () {
  $(window).scroll(function() {
      if ($(this).scrollTop() - 200 > 0) {
          $('#gotopdiv').stop().slideDown('fast');
      } else {
          $('#gotopdiv').stop().slideUp('fast');
      }
  });
});

$(function () {
  $("#gotopdiv").on("click", function () {
      $("html, body").animate({
          scrollTop: 0
      }, 200);
  });
});