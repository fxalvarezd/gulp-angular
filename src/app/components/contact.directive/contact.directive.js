(function() {
    'use strict';

    angular.module('gulpAngular').directive('contact', contactDirective);

    function contactDirective() {
        var directive = {
            restrict: 'E',
            scope: {
                type: '@'
            },
            templateUrl: 'app/components/contact.directive/contact.directive.html',
            controller: controller,
            controllerAs: 'vm'
        };
        return directive;

        function controller($scope, contactService) {
            var vm = this;

            contactService.get(function(data){
                var hits = data.hits;

                for (var i = 0; i < hits.length; i++) {
                    if (hits[i].type === $scope.type) {
                        vm.list = hits[i].list;
                        return;
                    }
                }
            });            
        }
    }
})();
