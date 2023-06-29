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
const browserSync = require('browser-sync').create();

const browserSyncJob=()=>{
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: `build/` }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    });
    gulp.watch(`./${APP}/scss/**/*.scss`, gulp.series(buildStyles));
    gulp.watch(`./${APP}/**/*.pug`, gulp.series(buildPug));
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
exports.buildStyles = buildStyles;
exports.buildPug=buildPug;
exports.server=browserSyncJob;
gulp.task('default',gulp.series(gulp.parallel(buildStyles, buildPug), browserSyncJob))
