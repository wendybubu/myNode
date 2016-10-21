var config = {
    UPLOADED: true, //false: local, true: server
    uploadedPath: function () {
        return 'http://img' + Math.floor(Math.random() * 10) + '.91huo.cn/my/activity/2016/sale/1111/';
    }, // 设置随机图片服务器的地址前缀
    BEFORE_UPLOADING_PATH: '../images/',
    HTML_EXTENSION: 'html,shtml,htm',
    IMAGE_EXTENSION: 'jpg,png,gif,ico',
    SRC_PATH: 'src', // 源文件目录
    DEST_PATH: 'dist' // 构建文件目录
};
var gulp = require('gulp');
// js
// babel
(function () {
    var replace = require('gulp-replace');
    var rename = require('gulp-rename');
    gulp.task('js', function () {
        var babelPath = config.SRC_PATH + '/**/*.js',
            beforeBabelPath = config.SRC_PATH + '/**/*.es6.js',
            copyPath = config.SRC_PATH + '/**/lib/*';//不需要babel编译的放在lib文件夹里面
        // copy babel file
        gulp.src([babelPath, '!' + beforeBabelPath, '!' + copyPath])
        // 去除 js.map
            .pipe(replace(/\/\/# sourceMappingURL=.*\.js\.map/, ''))
            .pipe(gulp.dest(config.DEST_PATH));
        // copy other file
        gulp.src([copyPath])
            .pipe(gulp.dest(config.DEST_PATH));
    });
})();
// otherfiles
gulp.task('otherFiles', function () {
    gulp.src([config.SRC_PATH + '/**/*.*', '!' + config.SRC_PATH + '/**/*.{' + config.HTML_EXTENSION + ',scss,css,js,map,' + config.IMAGE_EXTENSION + '}'])
        .pipe(gulp.dest(config.DEST_PATH));
});
// // watch
// gulp.task('watch', function () {
//     gulp.watch(config.SRC_PATH, ['filecopy']);
// });
// default
// gulp.task('default', ['filecopy', 'watch']);
gulp.task('default', ['js', 'otherFiles']);