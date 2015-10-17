angular.module('testApp')
    .controller('menuCtrl', menuCtrl);

menuCtrl.$inject = ['$scope'];
function menuCtrl($scope) {
  var i= 0,len=0;
  //меню
  $scope.links = [
    { href: "#/", name: "Posts", current: "current" },
    { href: "#/about", name: "About", current: "" }
  ];
  //переключение меню
  $scope.toogleMenu = function(link){
    for(i=0,len=$scope.links.length; i<len; i++) {
      $scope.links[i].current = "";
    }
    link.current="current";
  };
}

