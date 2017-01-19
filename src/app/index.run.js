'use strict';

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

function runBlock($log) {
	'ngInject';

	$log.debug('Hello from run block!');

  const config = {
    apiKey: 'AIzaSyCOMQ6vhn8AS1hDz95_1lt7Gojv4cl5oP0',
    authDomain: 'davcs86-meetup-planner.firebaseapp.com',
    databaseURL: 'https://davcs86-meetup-planner.firebaseio.com'
  };
  firebase.initializeApp(config);
}

export default runBlock;
