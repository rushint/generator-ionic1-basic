(function() {
    'use strict';

    angular
        .module('app.feature1')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.feature1', {
                url: '/feature1',
                views: {
                    'tab-feature1': {
                        templateUrl: 'app/view-feature1/feature1.html',
                        controller: 'Feature1Controller as vm'
                    }
                }
            });
    }
})();