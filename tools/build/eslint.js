const PATH = require('path');

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

const ROOT = '../../';
const BASE_CONFIG = require(PATH.resolve(__dirname, ROOT, 'tools/build/config/base.json'));

const SERVER_PATHS = [
    BASE_CONFIG.baseFolder+'/server.js'
].map(function(path) {
    return PATH.resolve(__dirname, ROOT, path);
});

const CONFIG_PATH = PATH.resolve(__dirname, ROOT, 'tools/build/config/eslint-config.json');

gulp.task('lint:app', function () {
    return gulp.src(SERVER_PATHS)
        .pipe(plumber())
        .pipe(eslint({configFile: CONFIG_PATH}))
        .pipe(eslint.format());
});

gulp.task('lint:watch:app', ['lint:app'], function() {
    gulp.watch(SERVER_PATHS, ['lint:app']);
});
