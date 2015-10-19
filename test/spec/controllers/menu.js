describe("Controller: menuCtrl", function() {

  var mockScope = {};
  var controller;

  beforeEach(angular.mock.module('testApp'));

  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    // создание нового scope
    mockScope = $rootScope.$new();
    controller = $controller("menuCtrl", {
      $scope: mockScope
    });

  }));

  it('check menu in menuCtrl', function() {
    expect(mockScope.links.length).toEqual(2);
    expect(mockScope.links[0].name).toEqual("Posts");
    expect(mockScope.links[1].name).toEqual("About");
  });

});
