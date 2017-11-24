define(['./src/csUtils.js'], function(csUtils) {
  var cloudsponge = {
      helloWorld: function(string){
        return csUtils.trim(string);
      }
  }
  return cloudsponge;
});
