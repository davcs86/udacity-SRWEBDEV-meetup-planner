'use strict';

import loginTpl from './login/login.html';
import registerTpl from './register/register.html';

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

}

export default routeConfig;
