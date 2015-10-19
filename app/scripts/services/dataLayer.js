angular.module('testApp')
  .factory("dataLayer", dataService);

//сервис по работе с базой
dataService.$inject = ['$http'];
function dataService($http){
  var baseUrl = 'http://localhost:3000/posts';
  return {
    getAllPosts: getAllPosts,
    addNewPost: addNewPost,
    updatePost: updatePost,
    deletePost: deletePost,
    getPostById: getPostById
  };
  function getAllPosts(){
    return $http.get(baseUrl);
  }
  function addNewPost(record){
    return $http.post(baseUrl, record);
  }
  function updatePost(record){
    return $http.put(baseUrl + '/' + record._id, record);
  }
  function deletePost(record){
    return $http.delete(baseUrl + '/' + record._id);
  }
  function getPostById(id){
    return $http.get(baseUrl + '/' + id);
  }

}

