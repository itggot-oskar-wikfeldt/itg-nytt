$(window).scroll(function(){

    var a = 64;
    var pos = $(window).scrollTop();
    if(pos > a) {
        $("#nav-bar").css({
            position: 'fixed',
            height: '32px'
        });
    }
    else {
        $("#nav-bar").css({
            position: 'static',
            height: '64px'
        });
    }
});