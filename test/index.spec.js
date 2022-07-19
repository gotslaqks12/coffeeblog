const supertest = require("supertest");
const assert = require('assert');
const app = require("../app");



describe("GET /", function() {
  it("it should get coffee", function(done){
    supertest(app)
    .get("/")
    .expect(200)
    .end(function(err, res){
      if (err) done(err);
      done();
    });
  });
});

describe("POST /", function(){
  it("it shoud return update", function(done) {
    supertest(app)
      .post("/ryancf")
      .expect(500)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});

describe("DELETE /", function() {
  it("it shoyld delete coffee", function(done){
    supertest(app)
    .delete("/")
    .expect(404)
    .end(function(err, res){
      if (err) done(err);
      done();
  });
});
});

describe("PUT /", function() {
  it("it shoyld update coffee", function(done){
    supertest(app)
    .put("/ryancf/:id")
    .expect(500)
    .end(function(err, res){
      if (err) done(err);
      done();
  });
});
});
