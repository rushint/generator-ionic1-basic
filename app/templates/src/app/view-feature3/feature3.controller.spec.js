/* jshint -W117, -W030 */
describe('Feature3Controller', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.feature3'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_) {
        var $scope = {};
        $controller = _$controller_('Feature3Controller', {$scope: $scope});
    }));

    describe('Feature 3 controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });
    });

});