
$(window).on('load',(function() {
    $('.loader').fadeOut();
    setTimeout(function () {
        $('.start_text').fadeIn();
    },1000);
}));

window.addEventListener('load', function() {
    // body의 height를 살짝 늘리는 코드
    document.body.style.height = (document.documentElement.clientHeight + 5) + 'px';
    // scroll를 제어 하는 코드
    setTimeout(scrollTo, 0, 0, 1);
}, false);



