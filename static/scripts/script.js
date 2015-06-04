$(document).ready(function() {
    $('#ready, #notready').mouseenter(function() {
        $(this).fadeTo("fast", 1);
        $(this).animate({
        	height: '+=20px',
        	width: '+=20px'
        });
    });
    $('#ready, #notready').mouseleave(function() {
        $(this).fadeTo("slow", 0.4);
        $(this).animate({
        	height: '-=20px',
        	width: '-=20px'
        });
    });
    $('#mmagick').click(function() {
    	$('#notready').fadeOut('slow');
    });
    $('#rmagick').click(function() {
    	$('#notready').fadeIn('slow');
    });

    $('#grow').click(function() {
    	$('#notready').animate({
    		height: '+=10px',
    		width: '+=10px'
    	});
    });

    $('#shrink').click(function() {
    	$('#notready').animate({
    		height: '-=10px',
    		width: '-=10px'
    	},
    	// From oficcial documentation - but wtheck it do?
		function() {
			console.log("Done!");
		});
    });

    $('.pull-me').click(function() {
    	$('.panel').slideToggle('fast');
    });

    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});

	$('#yellow').click(function() {
		$(this).effect('explode');
	});

	$('#resurrect').click(function() {
		$('#yellow').fadeTo('fast', 1);
	});

	$('img, #yellow, #ready, #notready, p, #menu, #home').draggable();

	$('#menu').accordion();
});