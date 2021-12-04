$(document).ready(function(){

  /***** Abrir link en una nueva ventana *****/
  $(".open-link-newTab").click(function(e){
 		e.preventDefault();
 		var HrefLink=$(this).attr("href");
 		window.open(HrefLink,'_blank');
  });
  /***** Moverse el la pagina institucion con Scroll *****/
	$('.scroll-navigation-ins ul li').click(function(){
		var seccion=$(this).attr('data-href');
	$('body,html').animate({
	  scrollTop:$(seccion).offset().top-70
	},1000);
	return false; 
	});
  /***** boton ir arriba *****/
  $('.btn-up').click(function(){
    $('body,html').animate({scrollTop:'0px'}, 100);
  });
  /*****Mostrar y ocultar boton ir arriba *****/
  $(window).scroll(function(){
    if($(this).scrollTop() >= 500){
      $('.btn-up').fadeIn();
    }else{
      $('.btn-up').fadeOut();
    }
  });
	/***** Mapa de GoogleMaps del Instituto *****/
	var map;
	function initialize() {
	  var myLatlng = new google.maps.LatLng(19.453952651706953, -99.17500764005172);
	  var mapOptions = {
	    zoom: 16,
	    center: new google.maps.LatLng(19.453952651706953, -99.17500764005172),
	    mapTypeId: google.maps.MapTypeId.HYBRID
	  };
	  map = new google.maps.Map(document.getElementById('mapa-ins'),
	    mapOptions);
	  var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'CECyT 9'
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);


});