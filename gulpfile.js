// Импорт пакетов
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const size = require('gulp-size')
const merge = require('merge-stream')

// SCSS
function styles() {
    return compileCss('style');
}

function widget() {
    return compileCss('stat-widget');
}

function pages() {
    return merge(
        compileCss('contacts-style'),
        compileCss('docs-style'),
        compileCss('magazine-style'),
        compileCss('mixtape-style'),
        compileCss('new-setting'),
        compileCss('olah-style'),
        compileCss('olod-style'),
        compileCss('ols-style'),
        compileCss('olzzo-style'),
        compileCss('partners-style'),
        compileCss('plgtvr-style'),
        compileCss('plts-style'),
        compileCss('region-style'),
        compileCss('sfk-style'),
        compileCss('teams-style'),
    );
}

function compileCss(file) {
  return gulp.src('assets/scss/'+file+'.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(cleanCSS({
        level: {
          2: {
            mergeMedia: false
          }
        }
      }))
      .pipe(rename({
        basename: file,
        suffix: '.min'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(size({
        showFiles:true
      }))
      .pipe(gulp.dest('assets/css'))
}

function watch() {
  gulp.watch('assets/scss/**/*.scss', gulp.parallel(styles, widget, pages));
}

exports.styles = styles
exports.widget = widget;
exports.pages = pages;
exports.default = gulp.series(gulp.parallel(styles, widget, pages), watch);
