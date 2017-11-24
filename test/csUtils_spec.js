define(['../src/csUtils.js'], function(csUtils){
  describe("csUtils", function(){
    describe("#trim", function(){
      it("should trim a string", function(){
        expect(csUtils.trim("   hello  ")).toEqual("hello");
      });
    });
  });
});
