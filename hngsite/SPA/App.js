var App = angular.module('App', ['ngRoute', 'ui.bootstrap']);

App.controller('MainController', MainController);
App.controller('JournalController', JournalController);
//App.controller('GridController', GridController);
//App.controller('ViewProductController', ViewProductController);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'SPA/Views/AboutMe.html'
        })
        .when('/journal', {
            templateUrl: 'SPA/Views/DevJournal.html',
            controller: JournalController
        })
       .otherwise({
           redirectTo: function () {
               return '/home';
           }
       });
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

App.config(configFunction);