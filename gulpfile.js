const gulp = require('gulp')
const minifyHtml = require('gulp-minify-html')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const browserSYNC=require('browser-sync').create()
/**gulp.task => görev oluşturur.
 * gulp.src => kaynak dosyalarını belirtmek için.
 * gulp.dest => hedef dizin belirtmek için.
 * gulp.watch => değişikliği dinler /Websocket gibi).
 * pipe => modify işlemlerini belirtirken kullanılan fonskişyon.
 */
gulp.task('mesaj', () => {
    return console.log(`gulp mesaj`);
});
gulp.task('kopyala', () => {
    return gulp.src('./src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./newFolder/images'))
        .pipe(gulp.dest('./newFolder2/images'))
});
gulp.task('view', () => {
    return gulp.src('./src/view/*.html')
        .pipe(gulp.dest('./newFolder/view'));
});
gulp.task('minifyhtml', () => {
    return gulp.src('./src/view/**/*.html')
        .pipe(minifyHtml({ output: true }))
        .pipe(gulp.dest('./newFolder2/view'))
        .pipe(browserSYNC.stream())
});
gulp.task('minifyjs', () => {
    return gulp.src('./src/controller/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./newFolder2/controller'))
        .pipe(browserSYNC.stream())
});
gulp.task('CleanCSS', () => {
    return gulp.src('./src/style/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./newFolder2/style'))
        .pipe(browserSYNC.stream())
})
// const dinleJS=gulp(['./src/controller/**/*.js'])
// const dinleCSS=gulp(['./src/controller/**/*.js'])
// const dinleJS=gulp(['./src/controller/**/*.js'])
gulp.task('izle', () => {
    var files=['./newFolder2/view','./newFolder2/controller','./newFolder2/style']
    browserSYNC.init({
        server:'./newFolder2/view/',
    });
    gulp.watch([
        './src/view/**/*.html',
        './src/controller/**/*.js',
        './src/images/**/*.*'

    ],
        gulp.series(
            'minifyhtml',
            'minifyjs',
            'kopyala',
        )
    )
})
gulp.task('default',
    gulp.series(
        'kopyala',
        'minifyhtml',
        'minifyjs',
        'view',
        'CleanCSS',
        'izle',
    )
)