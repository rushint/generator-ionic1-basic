(function() {
    'use strict';

    angular
        .module('app.feature3')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.feature3', {
                url: '/feature3',
                views: {
                    'tab-feature3': {
                        templateUrl: 'app/view-feature3/feature3.html',
                        controller: 'Feature3Controller as vm'
                    }
                }
            });
    }
})();