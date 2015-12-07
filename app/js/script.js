(function(){
  $("#carousel-example-generic .carousel-inner").css("height", innerHeight);
  $(window).resize(function(){
    $("#carousel-example-generic .carousel-inner").css("height", innerHeight);
  })
})();