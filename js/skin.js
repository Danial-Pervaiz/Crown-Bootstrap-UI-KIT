/**
 * Crown UI-KIT
 *
 * This file contains all theme JS functions
 *
 * @package Crown UI-KIT
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------
 * 01 - Tooltip
 * 02 - Popover
 * 03 - Owl Carousel
 * 04 - Owl Carousel Slider
 * 05 - Bootstrap Vertical Slider
 * 06 - Google Maps
--------------------------------------------------------------
/*--------------------------------------------------------------
          Tooltips
--------------------------------------------------------------*/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

/*--------------------------------------------------------------
          Popover
--------------------------------------------------------------*/
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

/*--------------------------------------------------------------
          Owl Carousel
--------------------------------------------------------------*/
  $(document).ready(function() {
    $("#owl-slider2").owlCarousel({ 
      autoPlay: 3000, //Set AutoPlay to 3 seconds 
      items :6,
      itemsDesktop : [1199,6],
      itemsDesktopSmall : [979,6] 
    });
  });
 
/*--------------------------------------------------------------
          Owl Carousel Slider
--------------------------------------------------------------*/ 
  $(document).ready(function() { 
    $("#owl-slider1").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    });
  });

/*--------------------------------------------------------------
          Bootstrap Vertical Slider
--------------------------------------------------------------*/
  $('#myCarousel').carousel({
    interval: 3000
  });

/*--------------------------------------------------------------
          Google Map
--------------------------------------------------------------*/
  function initialize(){
    var myLatLng = {lat: 25.3500, lng: 74.6333}; // Insert Your Latitude and Longitude
    var mapCanvas = document.getElementById('gmap_canvas');
    var mapOptions = {
      center: myLatLng, 
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    marker = new google.maps.Marker({
       map: map,
       position: new google.maps.LatLng(25.3500,74.6333)
    });
    infowindow = new google.maps.InfoWindow({
       content:'<strong>Media City</strong><br>Chechani Bhawan, near vishal mega mart,, Bhilwara, Rajasthan 311001<br>'
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
  }
   google.maps.event.addDomListener(window, 'load', initialize);