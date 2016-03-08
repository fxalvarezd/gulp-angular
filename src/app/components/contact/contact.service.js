(function() {
    'use strict';

    angular.module('gulpAngular').factory('contactService', contactService);

    function contactService($resource) {
        return $resource('test/contacts.json');
    }
})();
