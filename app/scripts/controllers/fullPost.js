angular.module('testApp')
  .config(configFullPost)
  .controller('fullPostCtrl', fullPostCtrl);

//настроим роутинг страницы
function configFullPost($routeProvider) {
  $routeProvider
    .when('/posts/:id', {
      templateUrl: 'views/fullPost.html',
      controller: 'fullPostCtrl'
    })
}

//контроллер
fullPostCtrl.$inject = ['$scope','$location','$routeParams','dataLayer'];
function fullPostCtrl($scope, $location, $routeParams, dataLayer){
  $scope.record = {};
  $scope.$on("$routeChangeSuccess", getFullPost);

  function getFullPost(){
    var id = $routeParams["id"];
    if(id!=='undefined'){
      //получим пост по id
      dataLayer.getPostById(id).then(function(data){
        $scope.record = data.data;
      }, function(data){
        bootbox.alert("Error in getting data! Something goes wrong!");
      })
    }
  }

}

