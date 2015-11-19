let GramService = function(PARSE, $http) {
  // let vm = this;

  let url = PARSE.URL + 'classes/gram';

  this.getAllGrams = getAllGrams;
  this.addGram = addGram;

  function Gram(gramObj) {
    this.picture  = gramObj.picture;
    this.name     = gramObj.name;
    this.description = gramObj.description;
    //this.likes = gramObj.likes;
  }

  function addGram(gramObj){
    let g = new Gram(gramObj);
    return $http.post(url, g, PARSE.CONFIG);
  }

  function getAllGrams(){
    return $http.get(url, PARSE.CONFIG);
  }

  

};

GramService.$inject = ['PARSE','$http'];

export default GramService;