$(document).ready(function() {

    var menuBtn = $('.menu-icon'),
    menu = $('.navegacion ul');

    menuBtn.click(function() {
        menu.addClass('show').toggle();
    });
});

