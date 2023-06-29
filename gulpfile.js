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
const {src, dest,watch,parallel, series} = require("gulp");
const browserSync = require('browser-sync').create();

const browserSyncJob=()=>{
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: `build/` }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    });
    watch(`./${APP}/scss/**/*.scss`, buildStyles);
    watch(`./${APP}/**/*.pug`, buildPug);
    watch(`./${APP}/**/*.html`, copyHtml);
}
function buildStyles() {
    return src(`./${APP}/scss/pages/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(
            // Optional if you want to see not minified CSS file
            dest(`./build/styles`)
        )
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(`./`))
        .pipe(dest(`./build/styles`))
        .pipe(browserSync.stream());
}

const buildPug=()=>{
        return src(`./${APP}/**/*.pug`)
            .pipe(pug())
            .pipe(dest(`./build/exPug`))
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

gulp.task('default',series(parallel(buildStyles, buildPug, copyHtml), browserSyncJob))
