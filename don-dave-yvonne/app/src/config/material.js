import material from 'angular-material';

const appMat = angular.module('appMat', [material]);

appMat.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('statusBars')
  .primaryPalette('red')
  .accentPalette('green')
  .warnPalette('blue')
  .backgroundPalette('grey');
});

export default appMat.name;
