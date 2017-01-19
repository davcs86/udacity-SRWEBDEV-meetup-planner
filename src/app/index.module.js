'use strict';

import * as components from './index.components';
import * as config from './index.config';
import * as run from './index.run';
import collapse from 'angular-ui-bootstrap/src/collapse';
import * as firebase from 'angularfire';



const App = angular.module(
  "davcs86&#39;s MeetUp planner", [
    // plugins
    require('angular-ui-router'),
    "ngAnimate",
	  "ngTouch",
	  "ngSanitize",
	  "ngMessages",
	  "ngAria",
    "schemaForm",
    "toaster",
    firebase,

    collapse,

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,

    // routes
    require("./index.routes").name,

    // pages
    require("./pages/events/events.module").name,
    require("./pages/auth/auth.module").name

  ]
);

App
  .config(config)
  .run(run);



export default App;
