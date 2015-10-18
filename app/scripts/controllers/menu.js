angular.module('testApp')
    .controller('menuCtrl', menuCtrl);

//контроллер
function menuCtrl($scope, $route) {
  var i= 0,len=0;
  //меню. при редактировании меню - изменить индексы в переключении по маршрутам
  $scope.links = [
    { href: "#/", name: "Posts", url: "views/posts.html", current: "current"},
    { href: "#/about", name: "About", url: "views/about.html", current: "" }
  ];

  //при смене маршрута переключаем меню
  $scope.$on("$routeChangeSuccess", resetMenu);
  function resetMenu() {
    for(i=0,len=$scope.links.length; i<len; i++) {
      if ($route.current.loadedTemplateUrl == $scope.links[i].url){
        $scope.links[i].current = "current";
      } else {
        $scope.links[i].current = "";
      }
    }
  }
}

