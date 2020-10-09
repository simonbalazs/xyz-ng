const { src, dest } = require('gulp');

exports.default = function() {
    return src('src/assets/pic/*')
    .pipe(require('gulp-rename')(function(path) { path.dirname = 'assets/pic' }))
    .pipe(require('gulp-filelist')('filelist.json', { relative: true }))
    .pipe(dest('output/'));
}