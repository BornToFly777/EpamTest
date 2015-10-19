describe("Filter: cut(in textModule)", function () {

  var filterInstance;

  beforeEach(angular.mock.module("textModule"));

  beforeEach(angular.mock.inject(function ($filter) {
    filterInstance = $filter("cut");
  }));

  it("Filter 'cut': Try cut with params", inject(function () {
    var count=5;
    var result = filterInstance("Hello World!",count);
    expect(result.length).toEqual(count+1);
    expect(result).toEqual("Hello…");
  }));

  it("Filter 'cut': Try cut by default", inject(function () {
    var strDefault100="qqqqqqqqqqwwwwwwwwwweeeeeeeeeerrrrrrrrrrttttttttttyyyyyyyyyyuuuuuuuuuuiiiiiiiiiioooooooooopppppppppp";
    var result = filterInstance(strDefault100 + strDefault100);
    expect(result.length).toEqual(101);
    expect(result).toEqual(strDefault100+'…');
  }));

});
