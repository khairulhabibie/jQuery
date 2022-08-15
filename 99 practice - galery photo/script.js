$(document).ready(function () {
  function slide(num) {
    if ($('.container').css('marginLeft') == '-1600px')
      $('.container').css('marginLeft', '0px');
    else $('.container').animate({ marginLeft: num });
  }

  var autoslide = setInterval(function () {
    slide('-=400px');
  }, 2000);

  $('#next').click(function () {
    if ($('.container').css('marginLeft') == '-1200px') 
      $('.container').css('marginLeft', '0px');
    else slide('-=400px');
    clearInterval(autoslide);
  });

  $('#prev').click(function () {
    if ($('.container').css('marginLeft') == '0px') 
      $('.container').css('marginLeft', '-1200px');
    else slide('+=400px');
    clearInterval(autoslide);
  });
  
});
