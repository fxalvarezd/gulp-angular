(function() {
    'use strict';

    angular.module('gulpAngular').directive('contact', contactDirective);

    function contactDirective() {
        var directive = {
            restrict: 'E',
            scope: {
                type: '@'
            },
            templateUrl: 'app/components/contact/contact.html',
            controller: controller,
            controllerAs: 'vm'
        };

        function controller($scope, contactService) {
            var vm = this;

            contactService.getList($scope.type).then(function(data) {
                vm.list = data;
            });
        }

        return directive;
    }
})();
