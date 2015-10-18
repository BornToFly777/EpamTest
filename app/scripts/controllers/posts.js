angular.module('testApp')
  .config(configPosts)
  .controller('postsCtrl', postsCtrl)
  .controller('ModalInstanceCtrl', modalCtrl)
  .directive("blogPost", blogPost)
  .directive("popupPost", popupPost);

//настроим роутинг страницы
function configPosts($routeProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'postsCtrl'
    })
}

//postsCtrl.$inject = ['$scope','$uibModal','dataLayer'];
function postsCtrl($scope, $uibModal, dataLayer) {
  $scope.record = {};

  //получаем посты с помощью сервиса и выводим на страницу
  dataLayer.getAllPosts().then(function(data){
    $scope.posts = data.data;
    //обработка ошибок при работе с данными
  }, function(data){
    bootbox.alert("Error in loading data to the page! Something goes wrong!");
  });

  //удаление поста и обновление всех постов на странице !! разобраться!!!
  $scope.removeRecord = function (record) {
    bootbox.confirm("Are you sure?", function(result) {
      if (result) {
        // удаляем пост
        dataLayer.deletePost(record).then(function () {
          //успешно! - обновим данные
          dataLayer.getAllPosts().then(function (data) {
            $scope.posts = data.data;
            bootbox.alert("Post deleted successfully!");
            //обработка ошибок при работе с данными
          }, function(data){
            bootbox.alert("Post deleted successfully! BUT Error in loading data to the page!");
          });
        }, function(data){
          bootbox.alert("Error in deleting data!");
        })
      }
    })
  };

  //редактирование поста
  $scope.updateRecord = function (record) {
    $scope.record = record;
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      scope: $scope,
      resolve: {
        record: function () {
          return $scope.record;
        }
      }
    });
    modalInstance.result.then(function (record){
      $scope.record = record;
      //обновляем пост
      dataLayer.updatePost($scope.record).then(function(){
        //успешно! - обновим данные на странице
        dataLayer.getAllPosts().then(function(data){
          $scope.posts = data.data;
          bootbox.alert("Post updated successfully!");
          //обработка ошибок при работе с данными
        }, function(data){
          bootbox.alert("Post updated successfully! BUT Error in loading data to the page!");
        });
      }, function(data){
        bootbox.alert("Error in updating data!");
      })
    });
  };

  //модальное окно добавления поста
  $scope.open = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        record: function () {
          return $scope.record;
        }
      }
    });
    //логика добавления поста + обновление всех постов на странице
    modalInstance.result.then(function (record) {
      $scope.record = record;
      //добавляем
      dataLayer.addNewPost($scope.record).then(function(){
        // успешно! - обновим данные на странице
        dataLayer.getAllPosts().then(function(data){
          $scope.posts = data.data;
          bootbox.alert("Post added successfully!");
          //обработка ошибок при работе с данными
        }, function(data){
          bootbox.alert("Post added successfully! BUT Error in loading data to the page!");
        })
      }, function(data){
        bootbox.alert("Error in adding data!");
      })
    });
  };
}



// Логика контроллера модального окна добавления/редактирования поста
//modalCtrl.$inject = ['$scope','$modalInstance'];
function modalCtrl($scope, $modalInstance) {

  $scope.record = $scope.record || {};

  //метод получения подсказки при валидации
  $scope.getError = function(error) {
    if (angular.isDefined(error)) {
      if (error.required) {
        return "This is required field! - Fill it!";
      }
    }
    return "";
  };

  //передаем пост по submit главному контроллеру
  $scope.saveRecord = function (record) {
    record.date = Date.now();
    $modalInstance.close(record);
  };

  //закрытие модального окна
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  }
}




//директива по выводу поста
function blogPost(){
  return {
    restrict: "E",
    templateUrl: "views/postDirective.html"
  }
}

//директива попапа
function popupPost(){
  return {
    restrict: "E",
    templateUrl: "views/popupPostDirective.html"
  }
}
