'use strict';

import listTpl from './list/list.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('events', {
      url: '/',
      templateUrl: listTpl,
      controller: require('./list/list.controller'),
      controllerAs: 'events'
    });

}

export default routeConfig;
