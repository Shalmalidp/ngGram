let GramService = function(PARSE, $http) {
  // let vm = this;

  let url = PARSE.URL + 'classes/gram';

  this.getAllGrams = getAllGrams;
  this.addGram = addGram;
  this.likeCounter = likeCounter;

  function Gram(gramObj) {
    this.picture      = gramObj.picture;
    this.name         = gramObj.name;
    this.description  = gramObj.description;
    this.likes        = (gramObj.likes) ? 0 : Number(gramObj.likes) ;
  }

  function addGram(gramObj){
    let g = new Gram(gramObj);
    return $http.post(url, g , PARSE.CONFIG);
  }

  function getAllGrams(){
    return $http.get(url, PARSE.CONFIG);
  }

  function likeCounter(gramObj){
    //console.log('clicked');
    (gramObj.likes = gramObj.likes + 1);
    return $http.put(url +'/'+ gramObj.objectId, gramObj, PARSE.CONFIG);
  }
  

};

GramService.$inject = ['PARSE','$http'];

export default GramService;