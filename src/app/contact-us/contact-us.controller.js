(function() {
    'use strict';

    angular.module('gulpAngular').controller('ContactController', ContactController);

    function ContactController() {
        var vm = this;

        // Bindables
        vm.pageTitle = 'Contact Us';

        init();

        // Functions
        function init() {

        }
    }
})();
