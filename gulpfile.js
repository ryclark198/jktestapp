var { src, dest ,parallel } =require('gulp');
var mocha = require('gulp-mocha');

//gulp.task('hello', function(done) {
 //   console.log('Hello World!');
   // done();
//});

function runmocha(){
    return src ('tests/tests.js', {read: false})
        .pipe(mocha())

}
exports.default=parallel(runmocha);