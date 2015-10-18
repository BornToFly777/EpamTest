'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
//модуль, созданный Yeoman
//решил не удалять его и view = 'views/about.html'
//чтобы в меню было хотя бы 2 ссылки
angular.module('testApp')
  .config(configAbout)
  .controller('AboutCtrl', aboutCtrl);

//настроим роутинг страницы
function configAbout($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
}

//контроллер
function aboutCtrl() {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}
