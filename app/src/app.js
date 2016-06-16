import angular from 'angular';
import controllers from './controllers/index';

var app = angular.module( 'app', [ controllers ] );

export default app.name;
