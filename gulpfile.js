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

//выполнение сценария по умолчанию:
gulp.task('default', copy);

