(function() {
    'use strict';

    angular.module('gulpAngular').controller('AboutController', AboutController);

    function AboutController() {
        var vm = this;

        vm.fx = 'fx';
    }
})();
