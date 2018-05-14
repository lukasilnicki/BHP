//skrypt dla tekstu ze szkoleniami

var szkolenia = $('#szkolenia');

szkolenia.fadeOut();            // Najpierw schowanie diva (dov bez właściwości w CSS, tylko do objęcia nagłówka i paragrafu)

$(window).scroll(function()
{
    if($(window).scrollTop() >= 620)
    {
        szkolenia.fadeIn(700);
    }
});


//skrypt dla tekstu z adytem

var audyty = $('#audyty');

audyty.fadeOut();       

$(window).scroll(function()
{
    if($(window).scrollTop() >= 730)
    {
        audyty.fadeIn(700);
    }
});


//skrypt dla tekstu z adytem

var doradztwo = $('#doradztwo');

doradztwo.fadeOut();

$(window).scroll(function()
{
    if($(window).scrollTop() >= 850)
    {
        doradztwo.fadeIn(700);
    }
});
