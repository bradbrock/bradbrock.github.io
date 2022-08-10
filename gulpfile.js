const sass = require('gulp-sass');
const { watch, src, dest } = require('gulp');

function compileSass() {
  console.log("sass");
  return (
    src('scss/style.scss')
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(dest('css'))
  )
}

exports.watch = function() {
  watch('scss/*.scss', { ignoreInitial: false }, function(cb) {
    compileSass();
    cb();
  });
};