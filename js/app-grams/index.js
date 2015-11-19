import angular from 'angular';
// import 'angular-ui-router;

import '../app-core/index';

import AddGramsController from './controllers/addgrams.controller';
 
import GramsController from './controllers/grams.controller';

import GramService from './services/gram.service';

import gramItem from './directives/gram.directive';

angular
  .module('app.grams',['app.core'])
  .controller('GramsController', GramsController)
  .controller('AddGramsController',AddGramsController)
  .service('GramService',GramService)
  .directive('gramItem', gramItem)
;