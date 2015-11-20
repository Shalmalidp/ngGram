let shalmaliGram = function($state,GramService,$timeout) {
  
  return {
    restrict : 'E',
    replace :true,
    scope : {
      gram :'='
    },
    template:`
      <div class="collection">
        <p> {{ gram.name }}
        <img ng-src="{{ gram.picture }}" >
        <div class="hidden"> <i class="fa fa-heart fa-5x">{{ gram.likes }}</i> </div

      </div>
    `,
    controller : 'GramsController as vm',
    link : function (scope, element, attrs){
      console.log("scope",scope);
      console.log("element", element);
      element.on('click',()=>{
        GramService.likeCounter(gramObj).then(()=>
          $timeout(function(){
            element.addClass('show');
          },1000)
        );
      });
    }

  };

};

shalmaliGram.$inject = ['$state','GramService','$timeout'];

export default shalmaliGram;