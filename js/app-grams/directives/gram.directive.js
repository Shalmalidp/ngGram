let shalmaliGram = function($state,GramService,$timeout) {
  
  return {
    restrict : 'AE',
    replace :true,
    scope : {
      gram :'='
    },
    template:`
      <div class="collection">
        <p> {{ gram.name }}
        <img ng-src="{{ gram.picture }}">
        <div class="hidden"><i class="fa fa-heart fa-5x">{{ gram.likes }}</i></div>

      </div>
    `,
    controller : 'GramsController as vm',
    link : function (scope, element, attrs){
      console.log("scope",scope);
      //console.log("element", element);
      element.on('click', ()=>{
        console.log('im clicked in the directive');
        element.find('div').removeClass('hidden').addClass('show');
        $timeout(function(){
          element.find('div').removeClass('show').addClass('hidden');
        },1000);
        
        GramService.likeCounter(scope.gram).then((res)=>{
          console.log(res);
        });
      });
    }

  };

};

shalmaliGram.$inject = ['$state','GramService','$timeout'];

export default shalmaliGram;
