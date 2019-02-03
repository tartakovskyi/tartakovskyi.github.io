'use strict';

const gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
notify = require('gulp-notify'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
clean = require('gulp-clean'),
babel = require('gulp-babel'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();
/*gutil = require('gulp-util')
*//*ftp = require('vinyl-ftp')*/

/** Configuration **/
//var user = vvt
//var password = vvt741852963
//var host = 'vvt.vitrina.pl.ua'
//var port = 21
//var localFilesGlob = ['./**/*']
//var remoteFolder = '/vvt.vitrina.pl.ua'

// helper function to build an FTP connection based on our configuration
//function getFtpConnection() {
//  return ftp.create({
//    host: host,
//    port: port,
//    user: user,
//    password: password,
//    parallel: 5,
//    log: gutil.log,
//  })
//}


gulp.task('sass', () => {
  return setTimeout(() => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError("SASS-Error: <%= error.message %>")))
    .pipe(autoprefixer({
     browsers: ['last 2 versions'],
     cascade: false
   }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
  }, 500);
});

gulp.task('html', () => {
 return gulp.src('src/**/*.html')
 .pipe(gulp.dest('app/'))
 .pipe(browserSync.stream());
});

gulp.task('js', () => {
 return gulp.src('src/js/**/*.js')
/* .pipe(sourcemaps.init())
 .pipe(babel({
            presets: ['@babel/env']
        }).on('error', notify.onError("JS-babel-Error: <%= error.message %>")))
 .pipe(uglify().on('error', notify.onError("JS-uglify-Error: <%= error.message %>")))
 .pipe(sourcemaps.write())*/
 .pipe(gulp.dest('app/js'))
 .pipe(browserSync.stream());
});

gulp.task('img', () => {
 return gulp.src('src/img/**/*.*')
 .pipe(gulp.dest('app/img'))
 .pipe(browserSync.stream());
});


gulp.task('fonts', () => {
 return gulp.src('src/fonts/**/*.*')
 .pipe(gulp.dest('app/fonts'))
 .pipe(browserSync.stream());
});

gulp.task('watch', () => {
 gulp.watch('src/scss/**/*.scss', ['sass']),
 gulp.watch('src/**/*.html',['html']),
 gulp.watch('src/js/**/*.*',['js'])
 gulp.watch('src/img/**/*.*',['img']),
 gulp.watch('src/fonts/**/*.*',['fonts'])
});

gulp.task('connect', function() {
 browserSync.init({
   server: {
     baseDir: "app",
     open: true
   }
 });
});

/*gulp.task('ftp-deploy', function() {
  var conn = getFtpConnection()

  return gulp
    .src(localFilesGlob, { base: '.', buffer: false })
    .pipe(conn.newer(remoteFolder)) // only upload newer files
    .pipe(conn.dest(remoteFolder))
})

gulp.task('ftp-deploy-watch', function() {
  var conn = getFtpConnection()

  gulp.watch(localFilesGlob).on('change', function(event) {
    console.log(
      'Changes detected! Uploading file "' + event.path + '", ' + event.type
    )

    return gulp
      .src([event.path], { base: '.', buffer: false })
      .pipe(conn.newer(remoteFolder)) // only upload newer files
      .pipe(conn.dest(remoteFolder))
  })
})*/

gulp.task('clean', function () {
  return gulp.src('app')
  .pipe(clean({
    force: true,
    read: false
  }));
});

gulp.task('developing', ['watch', 'html', 'js', 'img', 'fonts', 'sass', 'connect']);

gulp.task('default', ['clean'], () => {
  gulp.start('developing');
});