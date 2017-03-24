(function() {
    'use strict';

    angular
        .module('app', [
            /* Shared modules */
            'ionic',
            'app.core',

            /* Feature areas */
            'app.feature1',
            'app.feature2',
            'app.feature3',
        ]);
})();