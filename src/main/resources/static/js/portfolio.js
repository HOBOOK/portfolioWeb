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
            subject: "인턴 프로젝트(3인)",
            detail: "다우기술에서 인턴쉽 프로젝트로 번호 자원 관리 웹페이지 + REST API 서비스 구현을 하였습니다. 인턴 동기 3명과 협업하여 1달간 진행한 프로젝트로 백엔드 개발을 담당하였습니다. 다우기술에서 서비스중인 팩스 번호와 문자 대량 발송 서비스에 사용되는 번호를 효율적으로 통합 관리할 수 있는 서비스를 만드는것을 목적으로 번호 자원 할당, 수정 기능 사용자 인증 관리 기능이 있습니다.",
            ability: ["Spring 멀티 모듈 환경 구성","데이터베이스 모델링","RESTful API 구현","JWT를 이용한 API 서비스 인증 인가 처리","AccessToken과 RefreshToken을 이용한 세션 슬라이딩","리눅스 JSP 서버 배포","Swagger를 통한 API 문서 작성"],
            skills: "Java, Spring boot, Spring JWT, Hibernate JPA, MariaDB, Linux, Node.Js, VueJs, Swagger",
            info: [{
                type: "Git Hub",
                href: "https://github.com/HOBOOK/nanumi"
            },{
                type: "Link",
                href: "https://app.swaggerhub.com/apis/HOBOOK/nanumi/v1#"
            }]
        },
        {
            type: "Web",
            title: "Toomo",
            description: "메모기능, 할일 목록 등 개인 일정관리 목적의 SPA 웹",
            image: "img/i_13.png",
            period: "20.03.01 ~ 진행중",
            subject: "개인 학습 프로젝트(1인)",
            detail: "스케쥴 관리에 필요한 메모와 할일 목록 그리고 달력을 통한 일정 관리가 가능하도록 만든 웹사이트입니다. 아직 사이드 프로젝트로 진행중이기때문에 앞으로 많은 기능이 계속 추가될 예정입니다.",
            ability: ["Spring boot 메이븐 빌드 환경 구성","Hibernate JPA를 이용한 ORM 구성","CRUD API 구현","구글, 네이버등 외부 API를 통한 OAuth 인증 처리","AngularJs와 Thymeleaf를 통한 Single Page Application 구성", "리눅스 JSP 서버 배포"],
            skills: "Java, Spring boot, Hibernate JPA, MS-SQL, Linux, AngularJs, AWS RDS",
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
            period: "20.01.01 ~ 20.02.03",
            subject: "개인 포트폴리오(1인)",
            detail: "기업 이력서 제출 목적으로 만든 싱글 페이지입니다. 저에 대한 소개와 기술 스택, 타임 라인, 프로젝트 정보를 볼 수 있으며 저에게 이메일을 보낼 수 있는 기능이있습니다.",
            ability: ["Html 마크업 작성 및 CSS 작성", "AngularJs를 이용한 UI 구성","AWS 클라우드 서비스를 이용한 배포"],
            skills: "Spring boot, AngularJs, AWS EC2, Window Server",
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
            period: "18.04.16 ~ 18.12.31",
            subject: "솔루션 유지보수",
            detail: "앱 생명 관리 주기 웹 솔루션의 Source Repository(파일 형상 관리) 모듈을 담당하여 유지보수 하였습니다. 협업시 발생하는 소스 파일 충돌 및 버전 관리 이슈에 대한 처리와 효율 개선 작업을 주로 했습니다.",
            ability: ["닷넷 MVC패턴을 이해하고 솔루션 파악 및 이슈 처리","ExtJS를 이용하여 웹 프론트 UI 구성","REST API를 이해하고 오류 수정 및 기능 개선"],
            skills: "C#, ASP.NET, ExtJs, MS-SQL",
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
            period: "17.09.01 ~ 17.10.01",
            subject: "개인 학습 목적 프로젝트(1인)",
            detail: "대학교에서 배운것을 토대로 사진 업로드가 가능한 웹페이지와 게시판이 있는 블로그 사이트를 구현하였습니다.",
            ability: ["MVC1 패턴을 이용한 웹 페이지 구현","데이터 베이스 모델링","자바스크립트를 이용한 UI 구성"],
            skills: "Java, JSP, Html, Css, Javascript, MS-SQL, Window Server",
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
            period: "16.10 ~ 16.12",
            subject: "교내 경진대회 프로젝트(5인)",
            detail: "교내 S/W 프로젝트 경진대회에 출품하기 위해 구현한 웹사이트 입니다. 대부분의 풀스택 개발을 기여하였고, 사진 업로드와 게시글을 올릴 수 있는 게시판이있고 관리자 계정으로 로그인시 이용자 정보 관리 기능이 있습니다.",
            ability: ["Window Server 설치 및 IIS 환경 설정", "데이터 베이스 모델링 및 ERD 작성", "JSP를 이용한 MVC1패턴 웹페이지 작성"],
            skills: "Java, Jsp, Html, Css, Javascript, MS-SQL, Window Server",
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
            period: "17.03 ~ 17.05",
            subject: "교내 경진대회 프로젝트(5인)",
            detail: "교내 S/W 프로젝트 경진대회에 출품하기 위해 구현한 안드로이드 모바일 앱입니다. 외부 SNS을 통한 로그인 기능과 레이아웃 설계 및 구현을 담당했습니다.",
            ability: ["안드로이드 SDK를 통한 네이티브 앱 구현","카카오 API를 이용한 OAuth 인증"],
            skills: "Java, Android Studio",
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
            period: "19.11.27 ~ 19.12.23",
            subject: "상업용 게임(1인)",
            detail: "1인 게임 개발자로 출시한 소코반 퍼즐의 캐주얼 모바일 게임입니다. 터치 스와이프로 캐릭터를 조종하여 상자들을 목표지점에 모두 밀어 넣으면 되는 게임입니다.",
            ability: ["1인 사업의 실패"],
            skills: "C#, Unity Engine, Facebook SDK, Google Play SDK",
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
            period: "19.02.03 ~ 19.08.21",
            subject: "상업용 게임(1인)",
            detail: "1인 게임 개발자로 출시한 모바일 2D RPG 게임입니다. 각종 영웅들을 육성하고 장비를 얻고 스테이지를 클리어하는 게임입니다.",
            ability: ["1인 사업의 실패"],
            skills: "C#, Unity Engine, Firebase Database",
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
            period: "17.11 ~ 18.02",
            subject: "취미 프로젝트(2인)",
            detail: "그래픽 디자이너 친구와 공동 개발한 게임 프로젝트입니다. 힐링 컨셉으로 클리커 장르와 런 장르를 혼합하여 만든 게임입니다.",
            ability: ["그래픽 부분을 제외한 모든 부분 개발","유니티 엔진을 이해하고 MonoDevelop 프레임워크를 사용","로컬 데이터 저장과 구글 클라우드를 이용한 저장 기능 구현","30,000+ 다운로드"],
            skills: "C#, Unity Engine, Google Play SDK",
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


