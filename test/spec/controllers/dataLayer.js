describe("Service: dataLayer", function() {

  beforeEach(angular.mock.module("testApp"));

  beforeEach(angular.mock.inject(function ($httpBackend, $http, dataLayer) {

    backend = $httpBackend;
    mockDataLayer = dataLayer;

  }));

  it("Use service method getPostById", function () {
    angular.mock.inject(function ($httpBackend, $http, dataLayer) {
      backend.expect("GET", "http://localhost:3000/posts/1234").respond(
        {'_id':"1234", title: "item 1", titleImage: "imgPath1",author: "me", body: "something" }
      );
      var recordPromice = mockDataLayer.getPostById("1234");
      backend.flush();
      recordPromice.then(function(data){
        expect(data.data._id).toEqual("1234");
        expect(data.data.author).toEqual("me");
      });
     });
  });

  it("Use service method getAllPosts", function () {
    angular.mock.inject(function ($httpBackend, $http, dataLayer) {
      backend.expect("GET", "http://localhost:3000/posts").respond(
        [
          {'_id':"1234", title: "item 1", titleImage: "imgPath1",author: "me", body: "something" },
          {'_id':"1235", title: "item 2", titleImage: "imgPath2",author: "me2", body: "something2" },
          {'_id':"1236", title: "item 3", titleImage: "imgPath3",author: "me3", body: "something3" }
        ]
      );
      var postsPromice = mockDataLayer.getAllPosts();
      backend.flush();
      postsPromice.then(function(data){
        var posts = data.data;
        expect(data.data.length).toEqual(3);
        expect(data.data[0].titleImage).toEqual("imgPath1");
        expect(data.data[1]._id).toEqual("1235");
        expect(data.data[2].title).toEqual("item 3");
      });
    });
  })

});
