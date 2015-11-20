let GramsController = function(GramService) {
  
  let vm = this;
  
  vm.grams=[];

  activate();

  function activate(){
    GramService.getAllGrams().then((res)=>{
      vm.grams = res.data.results;
    });
  }

};

GramsController.$inject = ['GramService'];

export default GramsController;