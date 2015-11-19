let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      abstract : true,
      templateUrl : './templates/app-layout/layout.tpl.html'
    })

    .state('root.home',{
      url :'/',
      controller:'HomeController as vm',
      templateUrl:'./templates/app-layout/home.tpl.html'
    })

    .state('root.grams',{
      url : '/allgrams',
      controller : 'GramsController as vm',
      templateUrl : './templates/app-grams/grams.tpl.html'
    })

    .state('root.addgrams',{
      url :'/grams/add',
      controller : 'AddGramsController as vm',
      templateUrl :'./templates/app-grams/add-gram.tpl.html'
    });


  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;