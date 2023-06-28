// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder= nodePath.basename(nodePath.resolve());

const buildFolder= './build'; //так же можно использовать rootFolder
const srcFolder = './src';

//обьект для хранения всей информации о путях к файлам или папкам
// для того что б можно было использовать эти пути из других файлов нужно экспортировать нашу константу path:
export const path={

    //обьект путей к папке с результатом
    build:{
        files: `${buildFolder}/files/`
    },

    //обьект путей к исходным файлам
    src:{
        files:`${srcFolder}/files/**/*.*`,  //абсолютно все папки и файлы внутри папки src/files

    },

    //обьект путей к файлам и папкам за которыми должен следить gulp и при любых изменениях выполнять определённые действия
    watch: {
    },
    clean: buildFolder,
    buildFolder: buildFolder, //папка с результатом
    srcFolder: srcFolder, //папка с исходниками
    rootFolder: rootFolder, //текущая папка с проектом
    ftp:'' //тут можно указать папку на удалённом ftp сервере

}