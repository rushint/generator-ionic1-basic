(function() {
    'use strict';

    angular
        .module('app.feature2')
        .controller('Feature2Controller', Feature2Controller);

    Feature2Controller.$inject = [];

    /* @ngInject */
    function Feature2Controller() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();