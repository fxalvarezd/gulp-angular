(function() {
    'use strict';

    angular.module('gulpAngular').controller('AboutController', AboutController);

    function AboutController($scope, $localStorage) {
        var vm = this;

        // Bindables
        vm.steps = [
            'Add "Contact" page.',
            'Set proper navbar item as active.',
            'Create a Controller for the "Contact" page.',
            'Set the "Contact" page title from controller.',
            'Inside the "Contact" page, create a responsive grid like the one shown in the image below.',
            'Use the markup from the "Sidebar Nav" panel below inside the "Content 1" box.',
            'Use Nested Routing to display content for each of the sections inside the "Contact" page.',
            'Create a "contact" directive, and include it inside each of the sections.',
            'Create a service that retrieves data from test/contacts.json.'
        ];
        vm.toggleStorage = toggleStorage;

        init();

        // Functions
        function init() {
            if( angular.isDefined($localStorage.steps) ) {
                vm.storage = $localStorage.steps;
            } else {
                $localStorage.steps = [];
            }
        }

        function toggleStorage(index) {
            $localStorage.steps[index] = true;
        }
    }
})();
