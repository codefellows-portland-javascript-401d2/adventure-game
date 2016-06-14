const angular = require('angular');
require('./css/main.css');

const app = angular.module('app', []);
app.controller('main-Ctrl', function($scope){
  $scope.action = '';
});
app.controller('action-Ctrl', function($scope){
  $scope.something='';
});
