(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    //AMD
    // Now we're wrapping the factory and assigning the return
    // value to the root (window) and returning it as well to
    // the AMD loader.
    define([], function(){
      return (root.csUtils = factory());
    });
  } else if(typeof module === "object" && module.exports) {
    // CommonJS
    // I've not encountered a need for this yet, since I haven't
    // run into a scenario where plain modules depend on CommonJS
    // *and* I happen to be loading in a CJS browser environment
    // but I'm including it for the sake of being thorough
    module.exports = (root.csUtils = factory());
  
  // Browser
  } else {
    root.csUtils = factory();
  }
}(this, function() {
  var csUtils = (function() {
      return {
          trim: function(string){
            if(string != null){
              return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            }
            return string;
          }
      }
  })();
  return csUtils;
}));
