var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    // sassGlob = require('gulp-sass-glob'),
    filter = require('gulp-filter'),
    // gulpImagemin = require('gulp-imagemin'),
    //gulpNotify = require("gulp-notify"),
    gulpPug = require("gulp-pug");
//del = require('del');

function errorLog(error) {
    console.error(error);
    this.emit('end');
}

// sass
gulp.task('sass', function () {
    const stream = gulp.src('original/styles/**/*.sass')
        //.pipe(sf)
        // .on('error', errorLog)
        // .pipe(gulpPlumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions", "Android >= 4.0"],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('styles'))
    // .pipe(gulpNotify("CSS Finish"));

    return stream;
});


gulp.task('pug', function (done) {
    gulp.src('original/views/**/*.pug')
        .pipe(gulpPug({ pretty: true }))
        .pipe(gulp.dest("./"));
    done();
});

// watch
gulp.task('watch', function () {
    // gulp.watch('original/sass/**/*.sass', gulp.series('sass'));
    // gulp.watch('original/views/**/*.pug', gulp.series('pug'));
    // gulp.watch('original/sass/**/*.sass', ["sass"]);
    // gulp.watch('original/views/**/*.pug', ["pug"]);
    gulp.watch('original/styles/**/*.sass', gulp.series('sass'));
    gulp.watch('original/views/**/*.pug', gulp.series('pug'));
});
