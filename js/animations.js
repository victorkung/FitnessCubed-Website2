$(document).ready(function(){

	// FAQ Toggling
	$('.faq-question').on('click', function(){
		$(this).next().slideToggle(400);
		$( this ).children( 'span' ).toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
	});

	// Hamburger Icon
	$('#hamburger').mouseover( function () {
		$(this).attr("src", "img/hamburger2.png");
	});

	$('#hamburger').mouseleave( function () {
		$(this).attr("src", "img/hamburger1.png");
	});

	$('#hamburger').click( function () {
		$('#mobile-dropdown').slideToggle();
		if ( $('#mobile-dropdown').is(':visible')) {
			$('#mobile-navigation').css('height', 'auto');
		}
		else if($('#test').is(':hidden')) {
			$('#mobile-navigation').css('height', '75px');
			console.log("poop");
		}
	});

	// Owl Slider
	$("#homepage-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation : true,
		// autoPlay: 8000
		});

	$("#testimony-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: 8000
		});

	$("#features-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation : true,
		autoPlay: 8000
		});

	$("#cubii-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: 8000
		});


	$("#cubii-silver-select").click(function() {
				$("#cubii-noir").fadeOut("slow", function() {
					$("#cubii-noir").addClass('hidden');
				});
	
					$("#cubii-silver").fadeIn("slow", function() {
					$("#cubii-silver").removeClass('hidden');
				});
					
					$("#cubii-silver-select").addClass('bold');
					$("#cubii-noir-select").removeClass('bold');
			});

	$("#cubii-noir-select").click(function() {
					$("#cubii-silver").fadeOut("slow", function() {
					$( "#cubii-silver").addClass('hidden');
				});
		
					$("#cubii-noir").fadeIn("slow", function() {
					$( "#cubii-noir").removeClass('hidden');
				});
					$("#cubii-noir-select").addClass('bold');
					$("#cubii-silver-select").removeClass('bold');
			});



});

