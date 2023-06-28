//импортируем gulp из пакета gulp
//основной модуль:
import gulp from "gulp";
//им
import { path } from "./gulp/config/path.js";

//передаём значения в глобальную переменную:
global.app={
    path: path,
    gulp: gulp
}

//импортируем задачу копирования:
import {copy} from "./gulp/tasks/copy.js";
//импорт задачи удаления папки Build
import {reset} from "./gulp/tasks/reset.js";
import {copyHtml} from "./gulp/tasks/html.js";

//создаём функцию, в которую будем собирать разные наблюдатели
function watcher(){
    gulp.watch(path.watch.files,copy)
}

//Построение сценариев віполнения задач:

const mainTasks = gulp.parallel(copy, copyHtml);

//series - выполнит задачи одну за другой (сперва  очистим папку build перед каждым запуском сборки, скопируем, а потом повесим наблюдатель)
const dev = gulp.series(reset, mainTasks, watcher);
//выполнение сценария по умолчанию:
gulp.task('default', dev);

