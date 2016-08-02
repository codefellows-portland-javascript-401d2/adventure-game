import angular from 'angular';
import main from './main';

const controllers = angular.module( 'controllers', [] )
	.controller( 'main', main );

export default controllers.name;
