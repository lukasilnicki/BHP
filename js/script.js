window.onload = function()
{
    /*  FUNKCJE ODPOWIADAJĄCE ZA POKAZ SLAJDÓW W SEKCJI "O MNIE" */
    
    hide();

    function hide()     // Funkcja do schowania elementów przy ładowaniu strony;
    {
        $('#box1').fadeOut(0);
        $('#box2').fadeOut(0);
        $('#slider1').fadeOut(0);
        $('#slider2').fadeOut(0);
    }

    showonload();

    function showonload()       // Funkcja do pokazania elementów przy ładowaniu strony;
    {
        document.getElementById('box1').style.visibility = 'visible';
        $('#box1').fadeIn(800);
        document.getElementById('slider2').style.visibility = 'visible';
        $('#slider2').fadeIn(2000);
    }

    var x = 0;  // Zmienna dla obsługi zdarzenia onclick;

    var sliderPlus = document.getElementById("slider2");

    sliderPlus.addEventListener("click", sliderplus);

    function sliderplus()
    {
        document.getElementById("value").value = ++x;

        if(x === 1)
        {
            $('#slider2').fadeOut(200); 
            document.getElementById('slider2').style.visibility = 'hidden';
            document.getElementById('slider1').style.visibility = 'visible';
            document.getElementById('box1').style.display = 'none'; // Konieczne - bez tego 'box2' chowa się na dół, pod niewidocznego 'box1';
            $('#slider1').fadeIn(1900);
            showbox2();
            setTimeout("showbox2()", 200);  // setTimeout konieczny, żeby na ten ułamek sekundy nie było przeskoku pomiędzy elementami;
        }
    }

    var sliderMinus = document.getElementById("slider1");

    sliderMinus.addEventListener("click", sliderminus);

    function sliderminus()
    {
        document.getElementById("value").value = --x;

        if(x === 0)
        {
            $('#slider1').fadeOut(200);
            document.getElementById('slider2').style.visibility = 'visible';
            document.getElementById('slider1').style.visibility = 'hidden';
            document.getElementById('box2').style.display = 'none';
            $('#slider2').fadeIn(1900);
            showbox1();
            setTimeout("showbox1()", 200);
        }
    }

    function showbox1()
    {
        document.getElementById('box1').style.visibility = 'visible';
        $('#box1').fadeIn(500);
    }

    function showbox2()
    {
        document.getElementById('box2').style.visibility = 'visible';
        $('#box2').fadeIn(500);
    }



    /*  FUNKCJA ODPOWIADAJĄCE ZA STICKY MENU */
    
    $(document).ready(function() {
	var NavY = $('.menu').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.menu').addClass('sticky');
	} else {
		$('.menu').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});
    
    
    /*  FUNKCJA ODPOWIADAJĄCE ZA PRZENOSZENIE DO POZYCJI PO KLIKNIĘCIU W MENU */
    
    jQuery(function($)
	{
            //zresetuj scrolla
            $.scrollTo(0);
			
            $('#link1').click(function() { $.scrollTo($('#aboutme'), 500); });
            $('#link2').click(function() { $.scrollTo($('#offer'), 500); });
            $('#link3').click(function() { $.scrollTo($('#contact'), 500); });	
        }
    );
    
    
    
    /*  FUNKCJA ODPOWIADAJĄCE ZA PRZYCISK PRZENOSZĄCY CAŁKOWICIE DO GÓRY */
    
    var toTop = document.getElementById("toTop");
    
    $('#toTop').fadeOut(0);
    
    window.onscroll = function()
    { 
        var yScrollAxis = window.pageYOffset;
        var toTop = document.getElementById("toTop");

        if (yScrollAxis > 300)
        {
            toTop.style.visibility = "visible";
            $('#toTop').fadeIn(500);
        }
        else
        {
            toTop.style.visibility = "hidden";
            $('#toTop').fadeOut(500);
        }
    };
    
    $('#toTop').click(function() { $.scrollTo($('#top'), 500); });
    
    /*  FUNKCJA ODPOWIADAJĄCE ZA SEKCJĘ Z OFERTĄ */
    
    $(window).scroll(function()
    {
        var offer = document.getElementById("offer1");
        var yScrollAxis = window.pageYOffset;
        
        if(yScrollAxis > (offer.offsetTop - 450))
        {
           offer.setAttribute("id", "offer12");
        }
    });
};