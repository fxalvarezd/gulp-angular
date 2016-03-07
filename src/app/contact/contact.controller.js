(function() {
    'use strict';

    angular.module('gulpAngular').controller('ContactController', ContactController);

    function ContactController() {
        var vm = this;

        vm.pageTitle = 'Contact Us';
    }
})();
