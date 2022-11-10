import idb from '../base/lib/idb'
import ldb from '../base/lib/ldb'
import { uuidv4 } from '../base/utils/id-generator'

const db = idb('todo-app-db')
const init = () =>  {
    return new Promise(async (resolve, reject) => {
        const { version } = await db.info()
        await db.createStore('todos', version + 1, { keyPath: 'id', indices: ['_id', 'at', 'title', 'isDone'] })
        // await db.createindex('contacts', version + 5, '_id', { unique: true })
        return resolve(true)
    })
}
export default {
    ...db,
    init
}