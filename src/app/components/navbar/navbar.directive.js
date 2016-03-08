(function() {
    'use strict';

    angular.module('gulpAngular').directive('acmeNavbar', acmeNavbar);

    function acmeNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html'
        };
        return directive;
    }
})();
