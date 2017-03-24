(function() {
    'use strict';

    angular
        .module('app.feature2')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.feature2', {
                url: '/feature2',
                views: {
                    'tab-feature2': {
                        templateUrl: 'app/view-feature2/feature2.html',
                        controller: 'Feature2Controller as vm'
                    }
                }
            });
    }
})();