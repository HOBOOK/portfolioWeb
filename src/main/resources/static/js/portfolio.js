var app = angular.module('app', ['ngAnimate','ngSanitize', 'ui.bootstrap'])

app.controller('mainController', function ($scope) {
    $scope.version = "ver 20.06.25";
});

app.controller('projectController', function ($scope, $http, $compile, $uibModal, $filter) {
    var projects = [
        {
            type: "Web",
            title: "나누미",
            description: "다우기술 인턴 프로젝트 \n 번호 자원 관리 웹사이트 + REST API 서비스",
            image: "img/i_14.png",
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "ㅇㅇ",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/nanumi"
            }]
        },
        {
            type: "Web",
            title: "Toomo",
            description: "! 현재 진행중인 개인 프로젝트(2020-03-01~) \n 메모기능, 할일 목록 등 개인 일정관리 목적의 SPA 웹",
            image: "img/i_13.png",
            period: "20.03.01 ~ 진행중",
            subject: "개인 프로젝트",
            detail: "자세한 설명",
            ability: "ㅇㅇ",
            skills: "Java, Spring boot, Hibernate JPA, MS-SQL, AWS, AngularJs",
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
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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
            title: "Silkroad ALM",
            description: "NSE 기업에서 앱 생명 관리 주기(ALM) 웹 솔루션의 파일 형상 관리 모듈 유지 보수",
            image: "img/i_4.png",
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
            info: [{
                type: "Link",
                href: "http://www.nsetec.com/sub/silkroad/silkroad.html#/section-1"
            }]
        },
        {
            type: "Web",
            title: "Saghistory",
            description: "사진 저장과 블로그 웹사이트",
            image: "img/i_9.png",
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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
            period: "19.11.22 ~ 진행중",
            subject: "학습 목적",
            detail: "저의 개발 역량 향상과 학습 기록용으로 사용하고 있는 블로그입니다. 주로 코딩테스트 풀이를 포스팅하고, 개발중에 이해가 필요하거나 복습이 필요할 때 해당 기술에 대한 블로그를 남깁니다.",
            ability: "",
            skills: "",
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
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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
            period: "20.05.18 ~ 20.06.12",
            subject: "인턴 프로젝트",
            detail: "자세한 설명",
            ability: "기여하고 배운점",
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
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

    $scope.showModal = function($event, project){
        if($event.target.className.indexOf('block') !== -1)
            return;
        var modalInstance = $uibModal.open({
            templateUrl: 'modal/modal_project',
            controller: 'ModalInstanceCtrl',
            //size: size,
            resolve: {
                items: function () {
                    return project;
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

    $scope.project = items;
    console.log($scope.project.title);
    $scope.ok = function() {
        $uibModalInstance.close(items);
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
})

app.controller('aboutController', function ($scope, $http, $compile, $uibModal, $filter) {
    $scope.targetIndex = 0;
    $scope.targetSkillType = 0;
    $scope.skills = [];
    var skills = [{
        type: 0,
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
        type: 0,
        title: "C#",
        image: "img/skill_csharp.png",
        info: [{
            description: "객체지향언어중 가장 먼저 배운 언어입니다."
        },{
            description: ".Net ASP 환경에서 웹 솔루션 유지보수를 한 경험이 있습니다."
        },{
            description: "Unity 엔진을 이용해 모바일 게임을 출시한 경험이 있습니다."
        }]
    },{
        type: 0,
        title: "Javascript",
        image: "img/skill_javascript.png",
        info: [{
            description: "기본적인 자바스크립트 문법을 작성할 수 있습니다."
        },{
            description: "자바스크립트 프레임워크를 이용하여 프론트엔드 데이터 바인딩을 할 수 있습니다."
        },{
            description: "Ajax를 이용하여 비동기 요청처리를 할 수 있습니다."
        }]
    },{
        type: 0,
        title: "Python",
        image: "img/skill_python.png",
        info: [{
            description: "기본적인 문법을 이해하고 작성할 수 있습니다."
        },{
            description: "아직 배워가는 언어입니다."
        }]
    },{
        type: 1,
        title: "Spring Boot",
        image: "img/skill_spring.png",
        info: [{
            description: "Spring boot 멀티 모듈 설계를 할 수 있습니다."
        },{
            description: "JPA를 이용하여 ORM 구현을 할 수 있습니다."
        },{
            description: "Spring Security + JWT 인증 인가 처리를 할 수 있습니다."
        },{
            description: "RESTful API 서버를 구현할 수 있습니다."
        }]
    },{
        type: 1,
        title: "AngularJs",
        image: "img/skill_angularjs.png",
        info: [{
            description: "http를 이용해 API를 요청하고 데이터 바인딩을 할 수 있습니다."
        },{
            description: "데이터 필터 처리를 할 수 있습니다."
        }]
    },{
        type: 1,
        title: ".Net Framework",
        image: "img/skill_net.png",
        info: [{
            description: ".NET ASP를 통해 C#기반의 웹 개발이 가능합니다."
        },{
            description: "윈도우 기반의 응용프로그램을 만들 수 있습니다."
        }]
    },{
        type: 2,
        title: "Microsoft SQL Server",
        image: "img/skill_mssql.png",
        info: [{
            description: "MS-SQL 쿼리문을 통해 데이터베이스 모델링을 할 수 있습니다."
        },{
            description: "DB서버를 구축하고 백엔드 서버와 연동을 할 수 있습니다."
        }]
    },{
        type: 2,
        title: "Maria DB",
        image: "img/skill_maria.png",
        info: [{
            description: "MariaDB 쿼리문을 통해 데이터베이스 모델링을 할 수 있습니다."
        },{
            description: "DB서버를 구축하고 백엔드 서버와 연동을 할 수 있습니다."
        }]
    },{
        type: 2,
        title: "Firebase DB",
        image: "img/skill_firebase.png",
        info: [{
            description: "NoSQL 기반의 데이터베이스 설계를 할 수 있습니다."
        },{
            description: "REST 요청을 통해 데이터를 CRUD할 수 있습니다."
        }]
    },{
        type: 3,
        title: "AWS",
        image: "img/skill_aws.png",
        info: [{
            description: "AWS EC2 인스턴스를 생성하고 서버를 구성할 수 있습니다."
        },{
            description: "현재 포트폴리오 웹이 AWS를 통해 배포가된 상태입니다."
        }]
    },{
        type: 3,
        title: "Window Server",
        image: "img/skill_windowserver.png",
        info: [{
            description: "윈도우 서버를 설치하고 환경설정한 경험이 있습니다."
        },{
            description: "IIS 설정과 톰캣 환경 구성을 할 수 있습니다."
        }]
    },{
        type: 3,
        title: "Linux",
        image: "img/skill_linux.png",
        info: [{
            description: "기본적인 리눅스 명령어를 사용할 수 있습니다."
        },{
            description: "톰캣환경의 JSP 웹 서버 배포 경험이 있습니다."
        }]
    },{
        type: 4,
        title: "Git",
        image: "img/skill_git.png",
        info: [{
            description: "기본적인 Git 플로우를 이해하고 Git Hub를 통한 협업을 할 수 있습니다."
        },{
            description: "Source Tree를 사용해서 GUI 환경에서 Git을 이용할 수 있습니다."
        }]
    },{
        type: 4,
        title: "Unity Engine",
        image: "img/skill_unity.png",
        info: [{
            description: "유니티 엔진을 통해 3번의 모바일 게임 출시 경험이 있습니다."
        },{
            description: "MonoDevelop을 이해하고 사용할 수 있습니다."
        }]
    }];
    $scope.skills =  $filter('filter')(skills, {type: 0});

    $scope.getAboutHeader = function(){
        if($scope.targetIndex===0){
            return "저는 이런 사람입니다"
        }else if($scope.targetIndex===1){
            return "저의 기술 스택은 이렇습니다"
        }else {
            return "제가 걸어온 시간입니다"
        }
    }

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

    $scope.selectSkillType = function (type) {
        $scope.targetSkillType = type;
        $scope.skills = $filter('filter')(skills, {type: type});
    }

    $scope.selectedSkillType = function (type) {
        if(type===$scope.targetSkillType){
            return "selected";
        }else{
            return "";
        }

    }
})


