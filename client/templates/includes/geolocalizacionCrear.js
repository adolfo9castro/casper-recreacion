Template.geolocalizacionCrear.onRendered(function() {
	
	this.autorun(() => {
      if (GoogleMaps.loaded()) {        
        $('#mapa1').geocomplete({
          	map: $("#map"),
           	markerOptions: {
			    draggable: true
			},
			location: "Medellín - Antioquia, Colombia",			
			details: "fieldset",

		});

        $("#mapa1").bind("geocode:dragged", function(event, latLng){
			$("input[name=lat]").val(latLng.lat());
			$("input[name=lng]").val(latLng.lng());
        });

      }
    });
	setTimeout(function(){
	    $(".containerGeolocalizacion").css({"display":"none"})
	}, 1000)
});




   