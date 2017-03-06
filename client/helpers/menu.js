Template.menu.onRendered(function() {
	$('#menuOpen').pushmenu({ button : "#openMenuPerfil" });

	$(".pm_close").draggable({
		start: function() {
			console.log("gfgdfg")
		},
	});

	var template = this;
	slideoutInstance = new Slideout({
		'menu': template.$('.menuOpen').get(0),
		'panel': $('.menuOpen').get(0),
		'tolerance': 70
	});

});

Template.menu.events(function(){
	$(".pm_close").draggable({
		start: function() {
			console.log("gfgdfg")
		},
	});
})
