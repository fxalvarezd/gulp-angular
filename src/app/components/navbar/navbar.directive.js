(function() {
    'use strict';

    angular.module('gulpAngular').directive('acmeNavbar', acmeNavbar);

    function acmeNavbar() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: AcmeNavbarController,
            controllerAs: 'acmenav'
        };

        function AcmeNavbarController($location) {
            var vm = this;

            vm.getClass = getClass;

            function getClass(page) {
                if($location.path() == page) {
                    return 'active';
                }
            }
        }
    }
})();
