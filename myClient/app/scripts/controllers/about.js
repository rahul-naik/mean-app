'use strict';

/**
 * @ngdoc function
 * @name myClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myClientApp
 */
angular.module('myClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
