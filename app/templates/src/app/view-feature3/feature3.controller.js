(function() {
    'use strict';

    angular
        .module('app.feature3')
        .controller('Feature3Controller', Feature3Controller);

    Feature3Controller.$inject = [];

    /* @ngInject */
    function Feature3Controller() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();