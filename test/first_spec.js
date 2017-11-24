define(['../index.js'], function(cloudsponge){
  describe("First test", function(){
    it("cloudsponge ok", function(){
      expect(cloudsponge.helloWorld(" ola ")).toEqual("ola")
    });
  });
});
