var gulp = require('gulp'),
    nodemon = require('gulp-nodemon')
const PATH = require('path');
const ROOT = '../../';
const BASE_CONFIG = require(PATH.resolve(__dirname, ROOT, 'tools/build/config/base.json'));

var ignoredFiles = [
  "*.test.js",
  BASE_CONFIG.baseFolder + "/public/css/*",
  BASE_CONFIG.baseFolder + "/public/js/*"
]

gulp.task('server', function () {
  nodemon({ exec: 'babel-node .',
            verbose: true,
            ext: 'html js scss',
            ignore: ignoredFiles,
            tasks: ['build:scss', 'build:app', 'lint:app'] })
    .on('restart', function () {
      console.log('\nRESTARTING APP!\n')
    })
})
