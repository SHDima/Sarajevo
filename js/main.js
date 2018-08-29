/*________________Start Isotope_________________*/
	var $grid = $('.grid').isotope({
	});
	// filter functions
	var filterFns = {
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
/*________________MAP_________________________*/
var map;
var contentTitle = $('.contentTitle1').html();
	      function initMap() {
	      	var coordinate = {lat: 51.5036286, lng: 31.327157};
	        map = new google.maps.Map(document.getElementById('map'), {
	          center:coordinate,
	          zoom: 17
	        });
	        var marker = new google.maps.Marker({
	                position: coordinate,
	                map: map,
	              });
	      }
/*___________________Scroll_____________________*/
$(document).ready(function(){
	$('a.scroll').on("click", function(e){
		var scroll_el = $(this).attr('href');
	    $('html,body').animate({ scrollTop:$(scroll_el).offset().top},1200);
		});
	});
/*__________________MENU__________________*/
$('.mouseshow').on('click',function(event) {
	var show = $('.menu');
	if(show.hasClass('menushow')) {
		show.removeClass('menushow');
	}
	else{
	show.addClass('menushow');
      }
});
$(document).ready(function() {
	$(window).scroll(function() {
		 if($(window).scrollTop() >= ($(document).height() - $(window).height())*0.05){
				$('.home').addClass('show');
		  }
		   else if($(window).scrollTop() <= ($(document).height() - $(window).height())*0.05){
					$('.home').removeClass('show');
		    }
      });
	/*__________________Anime__________________*/
		setTimeout(function() {
			$(".amination").addClass("hide");
		 }, 3500);
		setTimeout(function() {
			$(".amination").addClass("dn");
		 }, 4500);
     var item = $('.item_animation');
     var timeout = 0;
     for (var i = 0; i < item.length; i++) {
     	setTimeout(
     		(function(N) {
     		 return function(){
     		    item.eq(N).addClass("red");
     	  	}
     		})(i),
         timeout
         );
     	timeout += 400;
 };
});
/*__________________SLIDER__________________*/
$(document).ready(function(){
     $('.slider').slick({
       dots: true,
       arrows:false,
       autoplay:true,
       infinite: true,
       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 4,
       responsive: [
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         }
       ]
     });
   });
