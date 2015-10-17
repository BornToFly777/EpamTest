angular
  .module('testApp', [
    'ngRoute',
    'ui.bootstrap',
    'textModule'
  ])
  //настроим роутинг приложения
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/news.html',
        controller: 'newsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'newsCtrl'
      })
      .when('/news/:id', {
        templateUrl: 'views/fullPost.html',
        controller: 'postCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


