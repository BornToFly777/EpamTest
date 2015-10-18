angular
  .module('testApp', [
    'ngRoute',
    'ui.bootstrap',
    'textModule'
  ])
  .config(configApp);


//настроим роутинг по умолчанию для приложения
function configApp($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'postsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}

