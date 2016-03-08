(function() {
    'use strict';

    angular.module('gulpAngular').controller('AboutController', AboutController);

    function AboutController($localStorage) {
        var vm = this;

        // Bindables
        vm.steps = [
            {
                description: 'Add "Contact" page.',
                stored: false
            },
            {
                description: 'Set proper navbar item as active.',
                stored: false
            },
            {
                description: 'Create a Controller for the "Contact" page.',
                stored: false
            },
            {
                description: 'Set the "Contact" page title from controller.',
                stored: false
            },
            {
                description: 'Inside the "Contact" page, create a responsive grid like the one shown in the image below.',
                stored: false
            },
            {
                description: 'Use the markup from the "Sidebar Nav" panel below inside the "Content 1" box.',
                stored: false
            },
            {
                description: 'Use Nested Routing to display content for each of the sections inside the "Contact" page.',
                stored: false
            },
            {
                description: 'Create a "contact" directive, and include it inside each of the sections.',
                stored: false
            },
            {
                description: 'Create a service that retrieves data from test/contacts.json.',
                stored: false
            }
        ];
        vm.toggleStorage = toggleStorage;

        init();

        // Functions
        function init() {
            if( angular.isDefined($localStorage.steps) ) {
                for (var i = 0; i < $localStorage.steps.length; i++) {
                    if ($localStorage.steps[i]) {
                        vm.steps[i].stored = true;
                    }
                }
            } else {
                $localStorage.steps = [];
            }
        }

        function toggleStorage(index, check) {
            if (check) {
                $localStorage.steps[index] = true;
            } else {
                $localStorage.steps[index] = false;
            }
        }
    }
})();