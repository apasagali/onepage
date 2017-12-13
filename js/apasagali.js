// JavaScript Document


 
   

 $(document).ready(function() {
	 
// $('nav').onePageNav();
// $('#nav-btn').click(function(){
// 	$('nav').slideToggle();
// });

// var nav = $('nav ul');

// //When the user resizes the window
// $(window).resize(function(){
//     //Get the width of the page
//    var width = $(window).width();
//     //If  width > breakpoint and the nav is hidden
//    if(width > 768 && nav.is(':hidden')) {
       
//        //Remove the style attribute
//        nav.removeAttr('style');
//    }
// });
   
	
	$('#masinfoimg').hide();


$(window).scroll(function() {
    if ($(this).scrollTop() > 1229) {    
		$('#masinfoimg').fadeIn("slow");
    }
    else {      
	   $('#masinfoimg').fadeOut("fast");		
    }
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 3180) {
		$('#masinfoimg3').fadeIn(700)		
    }
    else {
       
	   $('#masinfoimg3').hide();		
    }
});


$('a[href*="#"]').smoothScroll({offset: 0});	
});