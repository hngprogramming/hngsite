var App = angular.module('App', ['ngRoute', 'ui.bootstrap']);

App.controller('MainController', MainController);
App.controller('GridController', GridController);
App.controller('ViewProductController', ViewProductController);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'SPA/Views/home.html',
            controller: HomeController
        })
        .when('/aboutme', {
            templateUrl: 'SPA/Views/aboutme.html'
        })
       .otherwise({
           redirectTo: function () {
               return '/home';
           }
       });
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

App.config(configFunction);