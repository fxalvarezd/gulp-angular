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
                description: 'Set the page title from the controller.',
                stored: false
            },
            {
                description: 'Inside the contact page create a responsive grid that shows two sections (columns) that behave as follows:',
                stored: false,
                substeps: [
                    { description: 'For extra small width, both sections should be stacked and span the full width.' },
                    { description: 'For small width, the first section should be 1/3rd of the width and the second 2/3rds of the width.' },
                    { description: 'For medium and larger, the first section should be 1/4th of the width and the second 3/4ths of the width.' }
                ]
            },
            {
                description: 'Use the markup from the "Sidebar Nav" panel below inside the first column.',
                stored: false
            },
            {
                description: 'Create a service that retrieves data from "test/contacts.json". Include a method that gets only the contacts of a certain type (e.g. support, sales or info).',
                stored: false
            },
            {
                description: 'Render the "support" type contacts (using the service from above) as shown in the graphic below.',
                stored: false
            },
            {
                description: 'Create a directive to render the same contacts list as above, based on type.',
                stored: false
            },
            {
                description: 'Use Nested Routing to display different content for each of the sections from the sidebar.',
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