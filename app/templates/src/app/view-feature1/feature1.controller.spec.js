/* jshint -W117, -W030 */
describe('Feature1Controller', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.feature1'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_) {
        var $scope = {};
        $controller = _$controller_('Feature1Controller', {$scope: $scope});
    }));

    describe('Feature 1 controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });
    });

});