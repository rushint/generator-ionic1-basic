(function() {
    'use strict';

    angular
        .module('app.feature1')
        .controller('Feature1Controller', Feature1Controller);

    Feature1Controller.$inject = [];

    /* @ngInject */
    function Feature1Controller() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();