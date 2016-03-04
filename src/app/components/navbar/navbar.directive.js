(function() {
    'use strict';

    angular.module('gulpAngular').directive('acmeNavbar', acmeNavbar);

    function acmeNavbar() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html'
        };
    }
})();
