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
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },

    //обьект путей к исходным файлам
    src:{
        html: `${srcFolder}/*.html`, //все файлы HTML в папке pages
        files:`${srcFolder}/files/**/*.*`  //абсолютно все папки и файлы внутри папки src/files

    },

    //обьект путей к файлам и папкам за которыми должен следить gulp и при любых изменениях выполнять определённые действия
    watch: {
        html: `${srcFolder}/**/*.html`,
        files:`${srcFolder}/files/**/*.*`,  //абсолютно все папки и файлы внутри папки src/files
    },
    clean: buildFolder,
    buildFolder: buildFolder, //папка с результатом
    srcFolder: srcFolder, //папка с исходниками
    rootFolder: rootFolder, //текущая папка с проектом
    ftp:'' //тут можно указать папку на удалённом ftp сервере

}