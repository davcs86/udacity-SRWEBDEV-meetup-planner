'use strict';

import * as footerDirective from './footer.directive';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule
  .directive('customFooter', footerDirective);

export default footerModule;
