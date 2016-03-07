(function() {
    'use strict';

    angular.module('gulpAngular').config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact-us/contact-us.html',
                controller: 'ContactController',
                controllerAs: 'contact',
                abstract: true
            })
                .state('contact.support', {
                    url: '/support',
                    templateUrl: 'app/contact-us/support.html'
                })
                .state('contact.sales', {
                    url: '/sales',
                    templateUrl: 'app/contact-us/sales.html'
                })
                .state('contact.info', {
                    url: '/info',
                    templateUrl: 'app/contact-us/info.html'
                })
            ;

        $urlRouterProvider.otherwise('/');
    }

})();
