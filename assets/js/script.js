$(document).ready(function() {

	$(".top").click(function() {
		$(window).scrollTop(90);
	});


	$("#email").click(function(){
    	$("#invisible").text("evankeum@berkeley.edu");
	});

	$("#email2").click(function(){
    	$("#invisible2").text("evankeum@berkeley.edu");
	});

	$("#Bio").click(function(){
    	$(window).scrollTop(1070);
	});

	$("#Resume1").click(function(){
    	$(window).scrollTop(4247);
	});

	$("#Experiences").click(function(){
    	$(window).scrollTop(2100);
	});

	$(".picture").hover(function(){
    	$(".picture").css("opacity", "1");
    }, function() {
    	$(".picture").css("opacity",".7");
    });

	$("#copyright").click(function(){
		$("#copyright").append("<b> Stop Clicking Me!</b>");
	});


});