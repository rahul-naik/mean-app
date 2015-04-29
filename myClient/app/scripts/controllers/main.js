'use strict';

/**
 * @ngdoc function
 * @name myClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myClientApp
 */
angular.module('myClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Rahul',
      'AngularJS',
      'Karma'
    ];
  });
