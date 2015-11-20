let AddGramsController = function(GramService) {
  
  let vm = this;
  vm.addGram = addGram;

  function addGram(gramObj){
    GramService.addGram(gramObj).then((res)=>{
      console.log(res);
      gramObj.picture = "";
      gramObj.name = "";
      gramObj.description ="";
     

    });  
  }


};

AddGramsController.$inject = ['GramService'];

export default AddGramsController;