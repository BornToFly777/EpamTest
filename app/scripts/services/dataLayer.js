angular.module('testApp')
  .factory("dataLayer", dataService);

//сервис по работе с базой
dataService.$inject = ['$http'];
function dataService($http){
    return {
      //запрос на получение всех постов
      getAllPosts: function(){
        return $http.get('http://localhost:3000/posts');
      },
      //запрос на добавление поста
      addNewPost: function(record){
        return $http.post('http://localhost:3000/posts', record);
      },
      //запрос на обновление поста
      updatePost: function(record){
        return $http.put('http://localhost:3000/posts/' + record._id, record);
      },
      //запрос на удаление поста
      deletePost: function(record){
        return $http.delete('http://localhost:3000/posts/' + record._id);
      },
      //запрос конкретного поста
      getPostById: function(id){
        return $http.get('http://localhost:3000/posts/' + id);
      }
    }
  }

