$(window).on('load',(function() {
    setTimeout(scrollTo, 0, 0, 1);
}));

window.addEventListener('load', function() {
    // body의 height를 살짝 늘리는 코드
    document.body.style.height = (document.documentElement.clientHeight + 5) + 'px';
    // scroll를 제어 하는 코드
    setTimeout(scrollTo, 0, 0, 1);
}, false);




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
    if(isMobile)
    {
        var thisTarget = $(this).attr("href");
        var topPos = $("#"+thisTarget).position().top;
        $('html, body').animate({scrollTop : topPos}, 500);
        setTimeout(function () {
            ShowScrollAnimation(topPos);
        },500);
    }
    else
    {
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
        setTimeout(function () {
            $('#mCSB_1_dragger_vertical').css('top', $('.mCSB_container').position().top * -0.22);
            var scroll = $('#mCSB_1_dragger_vertical').position().top;
            ShowScrollAnimation(scroll);

        },500);
    }
});

function ShowScrollAnimation(scroll)
{
    $('.showAnimation').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = scroll + $(window).height();
        /* 3 */
        if( bottom_of_window > bottom_of_object){
            $(this).animate({'opacity':'1','margin-left':'0px'},1000);
        }
        //else if(bottom_of_window+300< bottom_of_object)
        //{
        //    $(this).animate({'opacity':'0','margin-left':'-300px'},500);
        //}
    });
    $('.showAnimation2').each( function(i){
        var bottom_of_object = $(this).offset().top+ $(this).outerHeight();
        var bottom_of_window = scroll+ $(window).height();

        /* 3 */
        if(bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},1000);
        }
        //else if(bottom_of_window+300 < bottom_of_object)
        //{
        //    $(this).animate({'opacity':'0'},500);
        //}
    });
}
function ShowGameInfoTextAnimation()
{
    $('.showAnimation').css('opacity','0');
    $('.showAnimation').animate({'opacity':'1'},1000);
}

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(window).on('load',(function() {
    if(!isMobile)
    {
        $('.container').mCustomScrollbar({
            theme: "minimal-dark",
            axis:"y",
            mouseWheelPixels : 300, // 마우스휠 속도
            scrollInertia : 400,
            documentTouchScroll : false,
            callbacks:{
                onScroll:function(){
                    var scroll = $('#mCSB_1_dragger_vertical').position().top;
                    scroll = $('#mCSB_1_dragger_vertical').position().top;
                    if(scroll >= 30){
                        $('.header').addClass('shrink');
                    }else{
                        $('.header').removeClass('shrink');
                    }
                    ShowScrollAnimation(scroll);
                }
            }
        });
    }
}));

$(window).on('scroll', function () {
    if(isMobile)
    {
        var st = $(this).scrollTop();
        if (st >=30){ // Scroll Down
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');
        }
        setTimeout(function () {
            ShowScrollAnimation(st);
        },500);
    }
});



//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

function SetSlideX()
{
    sliderWidth = $('#slider-wrap').width();
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
}

$(document).ready(function(){
    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides

    SetSlideX();
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
    ShowGameInfoTextAnimation();
    SetSlideX();
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
    //*> optional
    countSlides();
    pagination();
}

/************
 SLIDE RIGHT
 *************/
function slideRight(){
    ShowGameInfoTextAnimation();
    SetSlideX();
    pos++;
    if(pos==totalSlides){ pos = 0; }
    //SetWorksSlideBackground(pos);
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

function formCheck(fr) {

    if(fr.name.value == "") {
        alert("이름을 입력해 주세요.");
        fr.name.focus();
        return false;
    }
    else if(fr.email.value == "") {
        alert("이메일을 입력해 주세요.");
        fr.email.focus();
        return false;
    }
    else if(fr.message.value == "") {
        alert("내용을 입력해 주세요.");
        fr.message.focus();
        return false;
    }
    else{
        return true;
    }
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="typewriteWrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .typewriteWrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


$("#popup").click(function(){
    $(".thankyou_message").fadeOut();
});



