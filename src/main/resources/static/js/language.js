$.lang = {};

$.lang.ko= {
    header_menu_0: '게임',
    header_menu_1: '소개',
    header_menu_2: '연락',
    start_title_0: '방문해 주셔서 감사합니다',
    gameinfo_detail: '자세히 보기',
    gameinfo_0_title: '푸시 큐브 - 상자 밀기 퍼즐',
    gameinfo_0_subtitle: '게임 소개',
    gameinfo_0_information: '푸시 큐브는 슬라이드 조작으로 어디서나 심플하게 즐길 수 있는 소코반 형식의 상자 밀기 퍼즐 게임입니다.',
    gameinfo_1_title: '플랫 히어로즈',
    gameinfo_1_subtitle: '게임 소개',
    gameinfo_1_information: '플랫 히어로즈는 여러 영웅들을 모아 성장시켜 적들을 무찌르는 방치형 RPG 게임 입니다.',
    gameinfo_2_title: '라이피 - 힐링인생게임',
    gameinfo_2_subtitle: '게임 소개',
    gameinfo_2_information: '라이피는 직장생활과 여행을 통해 주인공을 성장시키는 힐링 육성 시뮬레이션 게임입니다.',
    about_name:'박 경 호',
    about_greetings_0:'1인 게임 개발자로 모바일 게임을 만들고 있습니다.',
    about_greetings_1:'C#언어를 주로 사용하며, 유니티 엔진을 이용하여 작업을 하고있습니다.',
    about_edu_title_0:'경상대학교',
    about_edu_subtitle_0:'경영정보학 전공',
    about_edu_title_1:'엔에스이',
    about_edu_subtitle_1:'ALM 솔루션 모듈 개발자',
    about_edu_title_2:'호북 게임즈',
    about_edu_subtitle_2:'1인 개발자',
    mail_info_category_0: '보내는 분',
    mail_info_category_1: '내용',
    mail_submit:'보내기'

};

$.lang.en = {
    header_menu_0: 'Works',
    header_menu_1: 'About',
    header_menu_2: 'Contact',
    start_title_0: 'Thank you for visiting',
    gameinfo_detail: 'Detail',
    gameinfo_0_title: 'Push Cube - Sokoban Puzzle',
    gameinfo_0_subtitle: 'Game Introduction',
    gameinfo_0_information: 'Sokoban-type box-puzzle puzzle game with cute and casual 3D voxel graphics.',
    gameinfo_1_title: 'Flat Heroes',
    gameinfo_1_subtitle: 'Game Introduction',
    gameinfo_1_information: 'Flat Heroes is an Idle RPG game where you gather and grow heroes to defeat your enemies.',
    gameinfo_2_title: 'Lifee',
    gameinfo_2_subtitle: 'Game Introduction',
    gameinfo_2_information: 'Lifee is a healing simulation game that grows the protagonist through work and travel.',
    about_name:'Gyeongho Park',
    about_greetings_0:'I am creating a mobile game with a single developer.',
    about_greetings_1:'I mainly use C # language and work with Unity engine.',
    about_edu_title_0:'GNU',
    about_edu_subtitle_0:'MIS',
    about_edu_title_1:'NSE',
    about_edu_subtitle_1:'ALM Developer',
    about_edu_title_2:'Hobook Games',
    about_edu_subtitle_2:'1 developer',
    mail_info_category_0: 'Your Info',
    mail_info_category_1: 'Message',
    mail_submit:'Send'
};

function setLanguage(currentLanguage) {
    console.log('setLanguage', arguments);

    $('[data-langNum]').each(function() {
        var $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langnum')]);
    });
}

$(document).ready(function() {
    $('.tgl-flip').on('change', function() {
        var isChecked = $(this).is(':checked');
        var selectedData;
        var $switchLabel = $('.tgl-btn');
        if(isChecked) {
            selectedData = $switchLabel.attr('data-tg-on');
        } else {
            selectedData = $switchLabel.attr('data-tg-off');
        }

        if(selectedData=='English')
        {
            setLanguage('ko');
        }
        else
        {
            setLanguage('en');
        }

    });
});