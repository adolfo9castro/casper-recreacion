Template.postsList.helpers({
  posts: function() {
    return Posts.find({},{
      sort: {submitted: -1}
    });
  }
});

Template.postsList.onRendered(function() {
  $('.textoResume').each(function(){

  var longitud=130;

  if($(this).text().length > longitud){

      var texto=$(this).text().substring(0,longitud);
      var indiceUltimoEspacio= texto.lastIndexOf(' ');
      texto=texto.substring(0,indiceUltimoEspacio) +'<span class="puntos">...</span>';

      var primeraParte = '<span class="texto-mostrado">' + texto + '</span>';
      var segundaParte = '<span class="texto-ocultado">' + $(this).text().substring(indiceUltimoEspacio,$(this).text().length - 1) + '</span>';

      $(this).html(primeraParte);
    };

  });

});
