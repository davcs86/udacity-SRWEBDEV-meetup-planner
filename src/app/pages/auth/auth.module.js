'use strict';

import * as route from './auth.route';

import './login/login.scss';
import './register/register.scss';
import './me/me.scss';

const authPageModule = angular.module('auth-module', [
  'ui.router'
]);

authPageModule
  .config(route);

export default authPageModule;
