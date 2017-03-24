/* jshint -W117, -W030 */
describe('Feature2Controller', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.feature2'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_) {
        var $scope = {};
        $controller = _$controller_('Feature2Controller', {$scope: $scope});
    }));

    describe('Feature 2 controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });
    });

});