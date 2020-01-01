var burger = $('.menu-trigger');

burger.each(function(index){
    var $this = $(this);

    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
});


$(".menu_click").on("click", function (e) {
    e.preventDefault();//anchor이벤트의 기본동작을 막는다.
    var thisTarget = $(this).attr("href");
    var moveTarget = $(".mCSB_container");
    var topPos = $("#"+thisTarget).position().top;
    if(-moveTarget.position().top<topPos)
    {
        moveTarget.animate({top:-topPos-30},500);
    }
    else
    {
        moveTarget.animate({top:-topPos+30},500);
    }
    moveTarget.animate({top:-topPos},500);

});


$(window).on('load',(function() {
    $('.container').mCustomScrollbar();
}));

$('.container').mCustomScrollbar({

    theme: "minimal-dark",
    axis:"y" // horizontal scrollbar
});

