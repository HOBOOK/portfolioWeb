var burger = $('.menu-trigger');

var isNavOn;
burger.each(function(index){
    var $this = $(this);

    $this.on('click', function(e){
        e.preventDefault();
        if(!isNavOn)
        {
            isNavOn=true;
            $(this).toggleClass('active');
            if($(this).hasClass('active'))
            {
                $('nav').addClass('open');
                $(".contact_info").css('visibility', 'hidden');
                $('nav').css('visibility', 'visible');
                $(".nav_content").css('visibility', 'hidden');
                setTimeout(function () {
                    $(".nav_content").css('visibility', 'visible');
                    setTimeout(function () {
                        $(".contact_info").css('visibility', 'visible');
                    },400);

                    isNavOn=false;
                },300);
            }

            else
            {

                $('nav').removeClass('open');
                $(".contact_info").removeClass('open');
                $(".nav_content").css('visibility', 'hidden');
                $(".contact_info").css('visibility', 'hidden');
                setTimeout(function () {
                    $('nav').css('visibility', 'hidden');
                    isNavOn=false;
                },1000);
            }

        }


    })
});


$(".menu_click, .nav_item").on("click", function (e) {
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
    $('.header').removeClass('shrink');
    $('.header').addClass('shrink');

});


$(window).on('load',(function() {
    $('.container').mCustomScrollbar({
        theme: "minimal-dark",
        axis:"y",
        mouseWheelPixels : 300, // 마우스휠 속도
        scrollInertia : 500
    });
}));

$("div, nav").on('mousewheel DOMMouseScroll',function(e){
    setTimeout(function(e)
    {
        var scroll = $('#mCSB_1_dragger_vertical').position().top;
        if(scroll >= 30){
            $('.header').addClass('shrink');
        }else{
            $('.header').removeClass('shrink');
        }
    },500);
});


//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);

    //next slide
    $('#next').click(function(){
        slideRight();
    });

    //previous slide
    $('#previous').click(function(){
        slideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
     ************************/
        //automatic slider
    /* 자동 옵션 var autoSlider = setInterval(slideRight, 5000); */

    //for each slide
    $.each($('#slider-wrap ul li'), function() {

        //create a pagination
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
    });

    //counter
    countSlides();

    //pagination
    pagination();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#slider-wrap').hover(
        function(){ $(this).addClass('active'); /* clearInterval(autoSlider); */},
        function(){ $(this).removeClass('active'); /* 자동 옵션 autoSlider = setInterval(slideRight, 5000);*/}
    );



});//DOCUMENT READY



/***********
 SLIDE LEFT
 ************/
function slideLeft(){
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    SetWorksSlideBackground(pos);
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
    //*> optional
    countSlides();
    pagination();
}

function SetWorksSlideBackground(pos) {
    if(pos==1)
        $('.scene.one').css('background-image', 'url("/img/background_scene1.png")');
    else if(pos==2)
        $('.scene.one').css('background-image', 'url("/img/background_scene2.png")');
    else
        $('.scene.one').css('background-image', 'url("/img/background_scene3.png")');
}


/************
 SLIDE RIGHT
 *************/
function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    SetWorksSlideBackground(pos);
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

    //*> optional
    countSlides();
    pagination();
}




/************************
 //*> OPTIONAL SETTINGS
 ************************/
function countSlides(){
    $('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}

$(".popupVideo a").click(function() {
    $(".video-popup").addClass("reveal"),
        $(".video-popup .video-wrapper").remove(),
        $(".video-popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
}),
$(".video-popup-closer").click(function() {
    $(".video-popup .video-wrapper").remove(),
        $(".video-popup").removeClass("reveal")
});



