Template.menu.onRendered(function() {
	$('#menuOpen').pushmenu({ button : "#openMenuPerfil" });

	$(".menuOpen").draggable({
		axis	: "x",
		revert	: true,
		revertDuration: 200,
		start	: function(){
			if($(".menuOpen").hasClass("pm_open")){
				$(".menuOpen").removeClass("pm_open");
				$(".pm_overlay").removeClass("pm_show");
				$(".pm_overlay").addClass("pm_hide");
			}
		}
	});

});