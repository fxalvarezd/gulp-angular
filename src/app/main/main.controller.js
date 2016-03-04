(function() {
    'use strict';

    angular.module('gulpAngular').controller('MainController', MainController);

    function MainController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.awesomeThings = [];
        vm.showToastr = showToastr;

        activate();

        function activate() {
            getWebDevTec();
        }

        function showToastr() {
            toastr.info('Something happened!');
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }
})();
