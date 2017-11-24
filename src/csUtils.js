define([], function(csUtils) {
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
});
