var assert = require('assert');
var math = require('../routes/math.js')
var app =require('../app');
var request =require('supertest')

describe('Math API Tests', function() {
    
    describe('Add two numbers', function() {
    it('two plus three is five', function() {
        assert.equal(math.add(2,3), 5);
        });
    });

    describe('Add two numbers through API', function() {
        it('two plus three is five', function(done) {
            request(app)
                .get('/api/add?n1=2&n2=3')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(function(res) {
                    var answer= res.body;
                    assert.equal(answer, 5);
                })
                .end(function(err,res) {
                    if (err) return done(err);
                    done();
                });
         });
    });
});
       

