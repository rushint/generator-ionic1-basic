(function() {
    'use strict';

    angular
        .module('app.feature3')
        .factory('Feature3Service', feature3Service);

    feature3Service.$inject = [];

    // Some fake testing data
    var people = [
        {
            id: 0,
            name: 'Gary Masterson',
            lastText: 'You on your way?',
            face: 'images/gary.jpg'
        }, {
            id: 1,
            name: 'Tom Scarlet',
            lastText: 'Hey, it\'s me',
            face: 'images/tom.jpg'
        }, {
            id: 2,
            name: 'Mary Weberlynne',
            lastText: 'I should buy a boat',
            face: 'images/mary.jpg'
        }
    ];

    /* @ngInject */
    function feature3Service() {
        var service = {
            all: all,
            remove: remove,
            get: get
        };
        return service;

        ////////////////

        function all() {
            // Might use a resource here that returns a JSON array
            return people;
        }

        function remove(person) {
            people.splice(people.indexOf(person), 1);
        }

        function get(personId) {
            for (var i = 0; i < people.length; i++) {
                if (people[i].id === parseInt(personId)) {
                    return people[i];
                }
            }
            return null;
        }
    }
})();
