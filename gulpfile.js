const gulp = require('gulp')
/**gulp.task => görev oluşturur.
 * gulp.src => kaynak dosyalarını belirtmek için.
 * gulp.dest => hedef dizin belirtmek için.
 * gulp.watch => değişikliği dinler /Websocket gibi).
 * pipe => modify işlemlerini belirtirken kullanılan fonskişyon.
 */
gulp.task('mesaj', () => {
    console.log(`gulp mesaj`);
});
gulp.task('kopyala', () => {
    gulp.src('./src/images/*.*')
        .pipe(gulp.dest('./newFolder/images'));
});
gulp.task('view', () => {
    gulp.src('./src/view/*.html')
    .pipe(gulp.dest('./newFolder/view'));
})
gulp.task('run',
    gulp.series(
        'kopyala',
        'view',
        'mesaj',

    )
)