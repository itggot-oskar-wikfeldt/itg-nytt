$(window).scroll(function () {

    if (window.matchMedia("(min-width: 1025px)").matches) {

        const a = 64;
        let pos = $(window).scrollTop();
        if (pos > a) {
            $("#nav-bar-wrapper").css({
                position: 'fixed',
                transition: 'top 0.2s',
                top: '0px',
                height: '32px'
            });
            $("header").css({
                'border-radius': '0px',
                'height': '48px'
            });
        }
        else {
            $("#nav-bar-wrapper").css({
                position: 'static',
                height: '64px',
                top: '-32px'
            });
            $("header").css({
                "border-radius": "0",
                'height': '64px'
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

function openMenu() {
    document.getElementById("hamburger-menu").classList.add("open");
    document.getElementById("scrim").classList.add("open");
}

function toggleNews() {
    document.getElementsByClassName("dropdown-menu-wrapper")[0].classList.toggle("open");
    document.getElementsByClassName("dropdown")[0].classList.toggle("open");
    document.getElementById("expand-news").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("hamburger-menu").classList.remove("open");
    document.getElementById("scrim").classList.remove("open");
}

function search() {
    document.getElementById("input-wrapper").classList.toggle("open");
}