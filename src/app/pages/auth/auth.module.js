'use strict';

import * as route from './auth.route';

//import './auth.common.scss';
import './login/login.scss';
import './register/register.scss';

const authPageModule = angular.module('auth-module', [
  'ui.router'
]);

authPageModule
  .config(route);

export default authPageModule;
