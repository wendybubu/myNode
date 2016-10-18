var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var compiledFiles = 'src/**/*-compiled.js';
var destDir = 'dist';
var copyPath = [//要复制的文件路径配置
    'src/**/*.*',//所有文件（若用 /**/* 会复制空文件夹）
    '!src/**/*.js',//排除 js 文件
    '!src/**/*.map'//排除 map 文件
];
// filecopy
gulp.task('filecopy', function () {
    // copy all files except *.js
    gulp.src(copyPath)
        .pipe(gulp.dest(destDir));
    // copy rename *-compiled.js
    gulp.src(compiledFiles)
        .pipe(replace(/\/\/# sourceMappingURL=.*\.js\.map/, ''))// 去除js.map
        .pipe(rename(function (path) {// 重命名
            path.basename = path.basename.substring(0, path.basename.length - 9);//获取文件名子字符串（去除-compiled）
        }))
        .pipe(gulp.dest(destDir));
});
// watch
gulp.task('watch', function () {
    gulp.watch(compiledFiles, ['filecopy']);
});
// default
gulp.task('default', ['filecopy', 'watch']);