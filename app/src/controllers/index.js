import angular from 'angular';
import main from './main';
import status from './status';
import gamebox from './gamebox';
import textbox from './textbox';

const controllers = angular.module( 'controllers', [] )
	.controller( 'main', main )
	.controller( 'status', status )
	.controller( 'textbox', textbox )
	.controller( 'gamebox', gamebox );

export default controllers.name;
