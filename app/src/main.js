import angular from 'angular';
import app from './app';
import template from './app.html';
import 'angular-material/angular-material.min.css';
import './css/main.css';

import appMat from './config/material';

document.body.innerHTML = template;
angular.bootstrap( document, [ app, appMat ]);
