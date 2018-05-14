function hide()     // Funkcja do schowania elementów przy ładowaniu strony;
{
    $('#box1').fadeOut(500);
    $('#box2').fadeOut(500);
    $('#slider1').fadeOut(500);
    $('#slider2').fadeOut(500);
}
		
function showonload()       // Funkcja do pokazania elementów przy ładowaniu strony;
{
    document.getElementById('box1').style.visibility = 'visible';
    $('#box1').fadeIn(800);
    document.getElementById('slider2').style.visibility = 'visible';
    $('#slider2').fadeIn(2000);
}

var x = 0;  // Zmienna dla obsługi zdarzenia onclick;
		
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
	setTimeout("showbox2()", 200);  // setTimeout konieczny, żeby na ten ułamek sekundy nie było przeskoku pomiędzy elementami;
    }
}
		
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