'use strict';

import * as route from './events.route';

const eventsPageModule = angular.module('events-module', [
  'ui.router'
]);

eventsPageModule
    .config(route);

export default eventsPageModule;
