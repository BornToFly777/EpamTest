angular.module('testApp')
  .controller('postCtrl', postCtrl);

postCtrl.$inject = ['$scope','dataLayer'];
function postCtrl($scope, dataLayer){
  var id, url;

  //получим id
  url = window.location.href.split("/");
  id = url[url.length - 1];

  //получим пост по id
  $scope.record = {};
  dataLayer.getPostById(id).then(function(data){
    $scope.record = data.data;
  }, function(data){
    bootbox.alert("Error in getting data! Something goes wrong!");
  })

}
