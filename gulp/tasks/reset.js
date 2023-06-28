//installation del plugin:
// npm i -D del (в консоли)
//подключим плагин del

import {deleteAsync} from "del";
export const reset=()=>{
    return deleteAsync(app.path.clean);
}