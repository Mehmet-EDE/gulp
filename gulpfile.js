const gulp = require('gulp')
const minifyHtml = require('gulp-minify-html')
const minifyJS = require('gulp-uglify-es').default;
const uglify = require('gulp-uglify')
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
    return gulp.src('./src/images/*.*')
        .pipe(gulp.dest('./newFolder/images'));
});
gulp.task('view', () => {
    return gulp.src('./src/view/*.html')
        .pipe(gulp.dest('./newFolder/view'));
});
gulp.task('minifyhtml', () => {
    return gulp.src('./src/view/*.html')
        .pipe(minifyHtml({ output: true }))
        .pipe(gulp.dest('./newFolder2/view'))
});
gulp.task('minifyjs', () => {
    return gulp.src('./src/controller/*.js')
        .pipe(gulp.dest('./newFolder2/controller'))
});
gulp.task('uglifyJS', () => {
    return gulp.src('./newFolder2/controller/*.js')
        .pipe(uglify())
        .pipe(minifyJS())
})
gulp.task('run',
    gulp.series(
        'kopyala',
        'minifyhtml',
        'minifyjs',
        'uglifyJS',
        'view',
    )
)