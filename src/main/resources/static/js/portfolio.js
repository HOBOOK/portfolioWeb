var app = angular.module('app', ['ngAnimate','ngSanitize', 'ui.bootstrap'])

app.controller('projectController', function ($scope, $http, $compile, $uibModal, $filter) {
    var projects = [
        {
            type: "Web",
            title: "나누미",
            description: "다우기술 인턴 프로젝트 \n 번호 자원 관리 웹사이트 + REST API 서비스",
            image: "img/i_14.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/nanumi"
            }]
        },
        {
            type: "Web",
            title: "toomo",
            description: "! 현재 진행중인 개인 프로젝트(2020-03-01~) \n 메모기능, 할일 목록 등 개인 일정관리 목적의 SPA 웹",
            image: "img/i_13.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/tomo"
            },{
                type: "Link",
                href: "http://www.toomo.site"
            }]
        },
        {
            type: "Web",
            title: "G.H.Park Portfolio Web",
            description: "포트폴리오 정리 및 설명을 위한 웹사이트",
            image: "img/i_0.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/portfolioWeb"
            },{
                type: "Link",
                href: "http://www.ghpark.site"
            }]
        },
        {
            type: "Web",
            title: "Saghistory",
            description: "사진 저장과 블로그 웹사이트",
            image: "img/i_9.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/Saghistory"
            },{
                type: "Link",
                href: "http://www.ghpark.site/saghistory/index.jsp"
            }]
        },
        {
            type: "Web",
            title: "두더지(Do the G)",
            description: "교내 콘텐츠 제공 웹사이트",
            image: "img/i_12.png",
            info: [{
                type: "PDF",
                href: "http://www.ghpark.site/pdf/dotheg.pdf"
            }]
        },
        {
            type: "Mobile App",
            title: "히스토아(HistoAR)",
            description: "증강현실을 이용한 역사 탐방 앱",
            image: "img/i_11.png",
            info: [{
                type: "PDF",
                href: "http://www.ghpark.site/pdf/histoar.pdf"
            }]
        },
        {
            type: "Blog",
            title: "개인 블로그",
            description: "알고리즘 문제 풀이 및 개발 기술 공부 기록용 블로그",
            image: "img/i_10.png",
            info: [{
                type: "Link",
                href: "https://blog.naver.com/pkh879"
            }]
        },
        {
            type: "Mobile Game",
            title: "푸시 큐브(Push Cube)",
            description: "소코반 퍼즐 형식의 안드로이드 모바일 게임",
            image: "img/i_1.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/PushCube"
            },{
                type: "Link",
                href: "https://play.google.com/store/apps/details?id=com.HobookGames.PushCube"
            }],
            video: {
                id: "CsW758NgrFY",
                type: "Youtube"
            }
        },
        {
            type: "Mobile Game",
            title: "플랫히어로즈(Flat Heroes)",
            description: "2D RPG 안드로이드 모바일 게임",
            image: "img/i_2.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/Flat-Heroes"
            },{
                type: "Link",
                href: "https://play.google.com/store/apps/details?id=com.HobookGames.FlatHeros"
            }],
            video: {
                id: "ZgJj51aOMvE",
                type: "Youtube"
            }
        },
        {
            type: "Mobile Game",
            title: "라이피(Lifee)",
            description: "힐링 장르의 방치형 3D 안드로이드 모바일 게임",
            image: "img/i_5.png",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/Lifee"
            },{
                type: "Link",
                href: "https://play.google.com/store/apps/details?id=com.jegh.getajob"
            }],
            video: {
                id: "R6od9USvgU8",
                type: "Youtube"
            }
        }
    ];

    $scope.projects = projects;
    $scope.selectedTagNumber = 0;

    $scope.filter = function(type){
        $scope.projects = [];
        if (type === 1){
            $scope.projects = $filter('filter')(projects, {type: 'Web'});
        }else if(type === 2){
            $scope.projects = $filter('filter')(projects, {type: 'Mobile App'});
        }else if(type === 3){
            $scope.projects = $filter('filter')(projects, {type: 'Mobile Game'});
        }else if(type === 4){
            $scope.projects = $filter('filter')(projects, {type: 'Blog'});
        }else{
            $scope.projects = projects;
        }
        $scope.selectedTagNumber = type;
    }

    $scope.selectedTag = function(type){
        if(type === $scope.selectedTagNumber){
            return "selected";
        }else{
            return "";
        }
    }

    $scope.getCardInfoImage = function(type){
        if (type === 'Git Hub'){
            return "fab fa-github"
        }else if(type === 'Youtube'){
            return "fab fa-youtube-square"
        }else if(type === 'Link'){
            return "fas fa-link"
        }else if(type ==='PDF'){
            return "fas fa-file-pdf"
        }
        return "";
    }

    $scope.showModal = function($event){
        console.log($event.target.className);
        if($event.target.className.indexOf('block') !== -1)
            return;
        console.log('모달창 오픈');
        var modalInstance = $uibModal.open({
            templateUrl: 'modal/modal_project',
            controller: 'ModalInstanceCtrl',
            //size: size,
            resolve: {
                items: function () {
                    return $scope.projects;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            console.log("modal click ok : " + selectedItem);
        }, function () {         // 그냥 닫았을때 받는것.
            console.log('modal에서 dismissed at: ' + new Date());
        });
    }

    $scope.popupVideo = function(id){
        $(".video-popup").addClass("reveal"),
        $(".video-popup .video-wrapper").remove(),
        $(".video-popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + id + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
    }
})

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
    console.log( items);         // 위의 resolve 에서 선언한 items의 값이 넘어온 것을 확인할 수 있다.
    $scope.ok = function() {
        $uibModalInstance.close(items[0]);
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
})

app.controller('aboutController', function ($scope, $http, $compile, $uibModal, $filter) {
    $scope.targetIndex = 0;
    $scope.skills = [{
        title: "Java",
        image: "img/skill_java.png",
        info: [{
            description: "가장 익숙하고 자신있는 언어입니다."
        },{
            description: "코딩테스트 주언어로 사용하고있습니다."
        },{
            description: "다양한 웹, 앱 프로젝트 경험이 있는 언어입니다."
        }]
    },{
        title: "C#",
        image: "img/skill_csharp.png",
        info: [{
            description: "Winform 프로그래밍을 할 수 있습니다."
        },{
            description: ".Net Framework 환경에서 웹 솔루션 유지보수를 한 경험이 있습니다."
        },{
            description: "Unity 엔진을 이용해 모바일 게임을 출시한 경험이 있습니다."
        }]
    }];

    $scope.selectAbout = function (index) {
        $scope.targetIndex = index;
    }

    $scope.selectedAbout = function (index) {
        if(index === $scope.targetIndex){
            return "selected";
        }else{
            return "";
        }
    }
})


