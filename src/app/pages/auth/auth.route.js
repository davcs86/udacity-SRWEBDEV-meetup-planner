'use strict';

import loginTpl from './login/login.html';
import registerTpl from './register/register.html';
import meTpl from './me/me.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: loginTpl,
      controller: require('./login/login.controller'),
      controllerAs: 'login'
    });

  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: registerTpl,
      controller: require('./register/register.controller'),
      controllerAs: 'register'
    });

  $stateProvider
    .state('me', {
      url: '/me',
      templateUrl: meTpl,
      controller: require('./me/me.controller'),
      controllerAs: 'me'
    });

}

export default routeConfig;
