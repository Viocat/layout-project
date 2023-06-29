'use strict';
const APP = 'app';
// const DEST='build/';
let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const {series} = require("gulp-cli/lib/shared/cli-options");
const {src, dest} = require("gulp");

const watchers=()=>{
    gulp.watch(`./${APP}/scss/**/*.scss`, buildStyles);
    gulp.watch(`./${APP}/**/*.pug`, buildPug);
    gulp.watch(`./${APP}/**/*.html`, copyHtml);
}
function buildStyles() {
    return gulp.src(`./${APP}/scss/pages/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(
            // Optional if you want to see not minified CSS file
            gulp.dest(`./build/styles`)
        )
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(`./`))
        .pipe(gulp.dest(`./build/styles`))
        .pipe(browserSync.stream());
}

const buildPug=()=>{
        return gulp.src(`./${APP}/**/*.pug`)
            .pipe(pug())
            .pipe(gulp.dest(`./build/exPug`))
            .pipe(browserSync.stream());
}

const copyHtml=()=>{
    return src(`${APP}/**/*.html`)
        .pipe(dest('build/'))
}

exports.buildStyles = buildStyles;
exports.buildPug=buildPug;
exports.server=browserSyncJob;
exports.html=copyHtml;

gulp.task('default',gulp.series(gulp.parallel(buildStyles, buildPug, copyHtml), browserSyncJob))
