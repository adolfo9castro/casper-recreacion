Template.layout.onRendered(function() {
  setTimeout(function(){
    $(".loaderContent").fadeOut("slow");
    setTimeout(function(){
      $(".loaderContent").remove();
    }, 2000);
  }, 2300)
});
