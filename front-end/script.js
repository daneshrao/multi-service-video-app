var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, filterFilter) {
    $scope.checkbox = {
        value: true
    };
    $scope.checkboxes = [
        { name: 'git', selected: false },
        { name: 'jenkins', selected: false },
        { name: 'docker', selected: false },
        { name: 'kubernetes', selected: false },
        { name: 'sonarqube', selected: false },
        { name: 'selenium', selected: false },
        { name: 'aws', selected: false },
        { name: 'azure', selected: false },
        { name: 'gcp', selected: false }
    ]
    $scope.selection = []
    $scope.checkbox_function = function () {
        return filterFilter($scope.checkboxes, { selected: true });
    }
    $scope.$watch('checkboxes|filter:{selected:true}', function (nv) {
        $scope.selection = nv.map(function (fruit) {
            return fruit.name;
        });
    }, true);

    $scope.video_tutorial_list = [];

    $http({
        method: 'GET',
        url: 'http://videoservice/'
    }).then(function successMethod(res) {
        $scope.video_tutorial_list = res.data;
        console.log("Data: " + res.data);
    }, function failureMethod(res) {
        console.error("Error " + res.data)
    })

    /*$scope.video_tutorial_list = [{
        "video_url": "https://www.youtube.com/watch?v=bGqS0f4Utn4",
        "channelId": "UCTt7pyY-o0eltq14glaG5dg",
        "video_title": "Jenkins Beginner Tutorial 8 - Jenkins integration with GIT (SCM)",
        "thumbnail_url": "https://i.ytimg.com/vi/bGqS0f4Utn4/default.jpg",
        "published_date": "2016-10-16T01:11:58.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=Z3S2gMBUkBo",
        "channelId": "UCnxrdFPXJMeHru_b4Q_vTPQ",
        "video_title": "Integrate with GitHub: build after each commit (Get started with Jenkins, part 13)",
        "thumbnail_url": "https://i.ytimg.com/vi/Z3S2gMBUkBo/default.jpg",
        "published_date": "2017-05-30T20:00:01.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=rb5OL-QQPw4",
        "channelId": "UCXJKOPxx4O1f63nnfsoiEug",
        "video_title": "Selenium + Jenkins + GIT Integration : Run your Test Cases from GIT Hub using Jenkins",
        "thumbnail_url": "https://i.ytimg.com/vi/rb5OL-QQPw4/default.jpg",
        "published_date": "2017-10-25T03:00:03.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=nMLQgXf8tZ0",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "Simple DevOps Project-3 | DevOps project with Git, Jenkins and Docker on AWS | CICD on containers",
        "thumbnail_url": "https://i.ytimg.com/vi/nMLQgXf8tZ0/default.jpg",
        "published_date": "2018-10-23T06:00:03.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=7svnd9b-BmU",
        "channelId": "UCnxrdFPXJMeHru_b4Q_vTPQ",
        "video_title": "Getting source code from git (Get started with Jenkins part 3)",
        "thumbnail_url": "https://i.ytimg.com/vi/7svnd9b-BmU/default.jpg",
        "published_date": "2016-03-15T12:54:17.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=4OQ6Hk5hl0k",
        "channelId": "UCFs7BfAeJI6MtdqzTXdA9Og",
        "video_title": "Jenkins : How to Integrate GIT repository with Jenkins : Tutorial 13",
        "thumbnail_url": "https://i.ytimg.com/vi/4OQ6Hk5hl0k/default.jpg",
        "published_date": "2017-11-05T10:56:21.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=BfJvxGs-HxQ",
        "channelId": "UCB12jjYsYv-eipCvBDcMbXw",
        "video_title": "What is Jenkins? How to run a maven GitHub project in Jenkins? | Tech Primers",
        "thumbnail_url": "https://i.ytimg.com/vi/BfJvxGs-HxQ/default.jpg",
        "published_date": "2017-06-17T20:59:52.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=gVjLDwcA6sQ",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "Deploy on Kubernetes Using Git, Jenkins, Ansible | Simple DevOps Project -5",
        "thumbnail_url": "https://i.ytimg.com/vi/gVjLDwcA6sQ/default.jpg",
        "published_date": "2019-08-28T05:00:10.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=SP8iZWKJNnQ",
        "channelId": "UCs6nmQViDpUw0nuIx9c_WvA",
        "video_title": "Jenkins Tutorial For Beginners 7 - Git and GitHub Integration with Jenkins (SCM)",
        "thumbnail_url": "https://i.ytimg.com/vi/SP8iZWKJNnQ/default.jpg",
        "published_date": "2018-05-27T22:45:08.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=nE4b9mW2ym0",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "Simple DevOps Project-2 | CI/CD pipeline using GIT, Jenkins & Ansible",
        "thumbnail_url": "https://i.ytimg.com/vi/nE4b9mW2ym0/default.jpg",
        "published_date": "2018-08-24T04:30:01.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=pSWadwORS8w",
        "channelId": "UChTdRj6YfwqhR_WEFepkcJw",
        "video_title": "Integrate GitHub with Jenkins CI/CD",
        "thumbnail_url": "https://i.ytimg.com/vi/pSWadwORS8w/default.jpg",
        "published_date": "2019-03-09T16:35:16.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=F8Nfjwneeb4",
        "channelId": "UC46vj6mN-6kZm5RYWWqebsg",
        "video_title": "Continuous Integration with Maven, Jenkins,Git & GitHub part-1",
        "thumbnail_url": "https://i.ytimg.com/vi/F8Nfjwneeb4/default.jpg",
        "published_date": "2019-03-10T07:18:11.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=ISAUsBSI8G0",
        "channelId": "UCqFKRsWspMf-EEe8SYDJFLg",
        "video_title": "Jenkins Tutorial - Part 03: Git Integration & Configuring jobs using Git",
        "thumbnail_url": "https://i.ytimg.com/vi/ISAUsBSI8G0/default.jpg",
        "published_date": "2015-04-28T13:04:36.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=9TX5LOInPIQ",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "Deploy a war file on Docker container using Jenkins | Git, Jenkins, Docker",
        "thumbnail_url": "https://i.ytimg.com/vi/9TX5LOInPIQ/default.jpg",
        "published_date": "2019-09-09T05:00:01.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=s73nhwYBtzE",
        "channelId": "UCB12jjYsYv-eipCvBDcMbXw",
        "video_title": "How to create Jenkins Pipeline with an Example | Pipeline as Code | Tech Primers",
        "thumbnail_url": "https://i.ytimg.com/vi/s73nhwYBtzE/default.jpg",
        "published_date": "2017-06-18T04:03:50.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=2rd-T_ST9Eg",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "DevOps Training | DevOps Tutorial For Beginners | Git & Jenkins | DevOps Tutorial | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/2rd-T_ST9Eg/default.jpg",
        "published_date": "2017-01-10T17:24:05.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=m0a2CzgLNsc",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "CI CD Pipeline Using Jenkins | Continuous Integration and Deployment | DevOps Tutorial | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/m0a2CzgLNsc/default.jpg",
        "published_date": "2018-07-19T14:46:27.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=pts8zdHel5E",
        "channelId": "UCuFg53ZTr6maqBC-4i9o4-w",
        "video_title": "08 - Jenkins pipeline integration with git & maven | Jenkins Pipeline Tutorial",
        "thumbnail_url": "https://i.ytimg.com/vi/pts8zdHel5E/default.jpg",
        "published_date": "2018-04-21T13:40:27.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=1cNwEMlmnq0",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "Dockerizing An Application | DevOps Tools | GIT Jenkins Docker | DevOps Tutorial | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/1cNwEMlmnq0/default.jpg",
        "published_date": "2017-08-01T16:00:29.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=bcMPotY18Uo",
        "channelId": "UCcTII5pbZYkU4fgFtb4uesg",
        "video_title": "How To Integrate Framework With Git and Github",
        "thumbnail_url": "https://i.ytimg.com/vi/bcMPotY18Uo/default.jpg",
        "published_date": "2019-02-06T08:25:21.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=dYygHm-OwKc",
        "channelId": "UCTt7pyY-o0eltq14glaG5dg",
        "video_title": "Katalon Studio 16 - Jenkins + Git Integration",
        "thumbnail_url": "https://i.ytimg.com/vi/dYygHm-OwKc/default.jpg",
        "published_date": "2017-04-11T01:19:00.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=LPT7v69guVY",
        "channelId": "UCTt7pyY-o0eltq14glaG5dg",
        "video_title": "How To Add Eclipse Project To GitHub | How to Commit, Push, Pull from Eclipse to GitHub",
        "thumbnail_url": "https://i.ytimg.com/vi/LPT7v69guVY/default.jpg",
        "published_date": "2017-11-14T12:01:49.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=41tsyReTloA",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "Git Tutorial | Git Basics - Branching, Merging, Rebasing | Learn Git | DevOps Tutorial | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/41tsyReTloA/default.jpg",
        "published_date": "2018-06-28T06:03:15.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=LRFkwfQh6J0",
        "channelId": "UC125t36ofMY3rKWHJzqDWOQ",
        "video_title": "Jenkins integration with Git in one minute for .Net Core/MVC projects",
        "thumbnail_url": "https://i.ytimg.com/vi/LRFkwfQh6J0/default.jpg",
        "published_date": "2018-05-08T09:27:26.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=i8klL6FujLc",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "DevOps Project - CI/CD Pipeline using Git, Jenkins, Ansible, Docker, and Kubernetes on AWS - 2019",
        "thumbnail_url": "https://i.ytimg.com/vi/i8klL6FujLc/default.jpg",
        "published_date": "2019-08-23T06:00:03.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=1MVQYSlgXrI",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "Git Merge Conflict Tutorial | Resolving Merge Conflicts In Git | DevOps Training | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/1MVQYSlgXrI/default.jpg",
        "published_date": "2017-08-21T15:32:47.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=NJPkHtvyAIQ",
        "channelId": "UC46vj6mN-6kZm5RYWWqebsg",
        "video_title": "Continuous Integration with Maven, Jenkins,Git & GitHub part-2",
        "thumbnail_url": "https://i.ytimg.com/vi/NJPkHtvyAIQ/default.jpg",
        "published_date": "2019-03-10T07:18:30.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=HTlAssPBKBs",
        "channelId": "UCnxrdFPXJMeHru_b4Q_vTPQ",
        "video_title": "Private repositories, GitHub & BitBucket (Get started with Jenkins, part 14)",
        "thumbnail_url": "https://i.ytimg.com/vi/HTlAssPBKBs/default.jpg",
        "published_date": "2017-07-11T20:00:01.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=p7-U1_E_j3w",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "What is Jenkins | Jenkins Tutorial for Beginners | Jenkins Continuous Integration Tutorial | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/p7-U1_E_j3w/default.jpg",
        "published_date": "2017-01-26T05:34:41.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=wGkd6LjsjUI",
        "channelId": "UCpQblhippq-KfWkXEEYFHTQ",
        "video_title": "DevOps using Git, Jenkins, VSC & Qlik Sense",
        "thumbnail_url": "https://i.ytimg.com/vi/wGkd6LjsjUI/default.jpg",
        "published_date": "2018-04-20T20:52:28.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=_fmX31VFbL8",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "Jenkins Pipeline Tutorial | Continuous Delivery Pipeline Using Jenkins | DevOps Training | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/_fmX31VFbL8/default.jpg",
        "published_date": "2018-07-27T13:25:29.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=6-VPlwkMIKA",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "DevOps -- Jenkins-4: AutoDeployment with Jenkins using git,maven and Tomcat server",
        "thumbnail_url": "https://i.ytimg.com/vi/6-VPlwkMIKA/default.jpg",
        "published_date": "2017-12-28T15:44:23.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=kNOs3fTRewk",
        "channelId": "UCFs7BfAeJI6MtdqzTXdA9Og",
        "video_title": "Jenkins : Run a job automatically after pushing the code into GIT : Tutorial 14",
        "thumbnail_url": "https://i.ytimg.com/vi/kNOs3fTRewk/default.jpg",
        "published_date": "2017-11-11T08:40:17.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=ZwdB1I14vEc",
        "channelId": "UC_evcfxhjjui5hChhLE08tQ",
        "video_title": "Simple DevOps Project-4 - Part 02 | Create DevOps project using Git, Jenkins, ansible and Docker",
        "thumbnail_url": "https://i.ytimg.com/vi/ZwdB1I14vEc/default.jpg",
        "published_date": "2018-11-14T04:30:01.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=xbGpMSrPdZc",
        "channelId": "UCuFg53ZTr6maqBC-4i9o4-w",
        "video_title": "07 Jenkins freestyle projects, maven and git",
        "thumbnail_url": "https://i.ytimg.com/vi/xbGpMSrPdZc/default.jpg",
        "published_date": "2018-04-25T15:46:31.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=s4wEmAFwhsg",
        "channelId": "UCjtZR8q1IWkzErJFY96RWDg",
        "video_title": "Jenkins Tutorials 3 - Git Plugin With Jenkins",
        "thumbnail_url": "https://i.ytimg.com/vi/s4wEmAFwhsg/default.jpg",
        "published_date": "2017-10-29T15:46:55.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=Lxd6JMMxuwo",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "Jenkins Tutorial For Beginners - 1 | Continuous Integration with Jenkins | DevOps Tools | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/Lxd6JMMxuwo/default.jpg",
        "published_date": "2015-12-02T14:56:57.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=11z2x3VYO_I",
        "channelId": "UCB12jjYsYv-eipCvBDcMbXw",
        "video_title": "Multi Branch Pipeline Job using Jenkins | Tech Primers",
        "thumbnail_url": "https://i.ytimg.com/vi/11z2x3VYO_I/default.jpg",
        "published_date": "2017-09-21T20:00:17.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=VSa7PgIANvs",
        "channelId": "UCbhMqw4JGvDMj9sd8z77jug",
        "video_title": "Continuous integration in Salesforce Using Jenkins and Git in 20 minutes",
        "thumbnail_url": "https://i.ytimg.com/vi/VSa7PgIANvs/default.jpg",
        "published_date": "2015-03-23T02:27:42.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=8mrJNkofxq4",
        "channelId": "UCjeQxX21qNidMYBo72R33jQ",
        "video_title": "Release from Jenkins by pushing Git tags",
        "thumbnail_url": "https://i.ytimg.com/vi/8mrJNkofxq4/default.jpg",
        "published_date": "2019-08-18T18:46:43.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=U6Ty0mtKlbU",
        "channelId": "UCTt7pyY-o0eltq14glaG5dg",
        "video_title": "Protractor Beginner Tutorial 15 | Protractor | Git | Jenkins integration",
        "thumbnail_url": "https://i.ytimg.com/vi/U6Ty0mtKlbU/default.jpg",
        "published_date": "2019-09-19T00:00:01.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=7KChmotZjPk",
        "channelId": "UCdfVawNpqi6Z6ICXY_DzuMA",
        "video_title": "Terraform within Jenkins Pipeline via Git push Webhook",
        "thumbnail_url": "https://i.ytimg.com/vi/7KChmotZjPk/default.jpg",
        "published_date": "2018-02-15T17:28:09.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=ZabOnqtDnxw",
        "channelId": "UCYo5aJ_PChQ_UzkaNsj5ZFg",
        "video_title": "Jenkins | use of Git Parameter plugin in Jenkins With Real time Scenarios",
        "thumbnail_url": "https://i.ytimg.com/vi/ZabOnqtDnxw/default.jpg",
        "published_date": "2018-10-30T07:35:54.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=GH3EqdezDls",
        "channelId": "UCxGMOu0QDJYYc2pXndonKpQ",
        "video_title": "DevOps | Jenkins | parameterized builds | git tags deployment | real-time use cases",
        "thumbnail_url": "https://i.ytimg.com/vi/GH3EqdezDls/default.jpg",
        "published_date": "2019-04-29T18:26:52.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=k-RsfDQKFTw",
        "channelId": "UChWxHlgMq_kIEucQpRDg0qQ",
        "video_title": "Failed to connect to repository : Error performing command: git.exe ls-remote -h",
        "thumbnail_url": "https://i.ytimg.com/vi/k-RsfDQKFTw/default.jpg",
        "published_date": "2018-02-08T14:13:25.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=-GsvomI4CCQ",
        "channelId": "UCsvqVGtbbyHaMoevxPAq9Fg",
        "video_title": "Jenkins Pipeline Tutorial | Jenkins Build And Delivery Pipeline | Jenkins Tutorial | Simplilearn",
        "thumbnail_url": "https://i.ytimg.com/vi/-GsvomI4CCQ/default.jpg",
        "published_date": "2018-12-12T14:30:00.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=FE_Lb0c58Hk",
        "channelId": "UCUmQhjjF9bsIaVDJUHSIIKw",
        "video_title": "Learn DevOps at Home | Git, Jenkins, Docker, Kubernetes, VM etc.",
        "thumbnail_url": "https://i.ytimg.com/vi/FE_Lb0c58Hk/default.jpg",
        "published_date": "2019-07-15T05:59:04.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=bf4111voUlw",
        "channelId": "UCuFg53ZTr6maqBC-4i9o4-w",
        "video_title": "02 - Jenkins Declarative Pipeline tutorial | Git Checkout",
        "thumbnail_url": "https://i.ytimg.com/vi/bf4111voUlw/default.jpg",
        "published_date": "2019-08-30T20:23:14.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=YEDjfd-OXhY",
        "channelId": "UCyBR6tE6at5Fw490KKEM1nA",
        "video_title": "Git Interview Q&A-Part1",
        "thumbnail_url": "https://i.ytimg.com/vi/YEDjfd-OXhY/default.jpg",
        "published_date": "2018-06-15T18:27:20.000Z"
    }, {
        "video_url": "https://www.youtube.com/watch?v=hMlr1KlazBk",
        "channelId": "UCkw4JCwteGrDHIsyIIKo4tQ",
        "video_title": "Docker Jenkins Pipeline Tutorial | Microservices Using Docker & Jenkins | DevOps Tools | Edureka",
        "thumbnail_url": "https://i.ytimg.com/vi/hMlr1KlazBk/default.jpg",
        "published_date": "2018-08-13T06:23:58.000Z"
    }]*/

    $scope.videoSearch = function (val) {
        $scope.video_tutorial_list = [];
        console.log(val);
        url = 'http://videoservice/?search=' + val
        alert(url);
        $http({
            method: 'GET',
            url: url
        }).then(function successMethod(res) {
            $scope.video_tutorial_list = res.data;
            console.log("Data: " + res.data);
        }, function failureMethod(res) {
            console.error("Error " + res.data)
        })
    }

});
