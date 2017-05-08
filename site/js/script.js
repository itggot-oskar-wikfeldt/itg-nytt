$(window).scroll(function () {

    if (window.matchMedia("(min-device-width: 1025px)").matches) {

        const a = 64;
        let pos = $(window).scrollTop();
        if (pos > a) {
            $("#nav-bar-wrapper").css({
                position: 'fixed',
                transition: 'top 0.2s',
                top: '0px',
                height: '32px'
            });
        }
        else {
            $("#nav-bar-wrapper").css({
                position: 'static',
                height: '64px',
                top: '-32px'
            });
        }
    } else {
        $("#nav-bar-wrapper").css({
            position: 'fixed',
            height: '64px',
            top: '0px'
        });
    }
});