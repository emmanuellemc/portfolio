$(window).on('load', function () { 
    let chargement = 0;
    console.log(chargement);        

        let interval = setInterval(function () {
            $('.load p').html(chargement + "%");
            chargement++;
            // Le <hr> suit la progression du compteur
            $('.load hr').css('width', chargement + "%");
            if (chargement ==100) {
                clearInterval(interval);
                $(".load").animate ({
                    'opacity': '0'
                }, 600, function () {
                    $(this).css({
                        'display': "none"})
                });
                $(' html, body').css({overflow: 'auto'});  
            }
        }, 50);             
});
