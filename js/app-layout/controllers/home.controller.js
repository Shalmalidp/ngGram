let HomeController = function(PARSE) {
  
  console.log(PARSE);
  let vm = this;
  vm.title = "home page";

};

HomeController.$inject = ['PARSE'];

export default HomeController;