(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    //AMD
    // Now we're wrapping the factory and assigning the return
    // value to the root (window) and returning it as well to
    // the AMD loader.
    define(["./src/csUtils.js"], function(csUtils){
      return (root.cloudsponge = factory(csUtils));
    });
  } else if(typeof module === "object" && module.exports) {
    // CommonJS
    // I've not encountered a need for this yet, since I haven't
    // run into a scenario where plain modules depend on CommonJS
    // *and* I happen to be loading in a CJS browser environment
    // but I'm including it for the sake of being thorough
    module.exports = (root.cloudsponge = factory(require("./src/csUtils.js")));
  
  // Browser
  } else {
    root.cloudsponge = factory(root.csUtils);
  }
}(this, function(csUtils) {
  var csUtils = csUtils;
  var cloudsponge = {
    helloWorld: function(string){
      console.log(csUtils.trim(string));
    }
  };
  return cloudsponge;
}));
