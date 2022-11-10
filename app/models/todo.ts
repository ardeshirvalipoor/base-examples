import { shortUUID } from '../base/utils/id-generator'
import { ITodo } from '../interfaces/todo'

export function Todo(title: string, isDone = false): ITodo {
    return {
        title,
        isDone,
        id: shortUUID(),
        at: new Date().toISOString(),
    }
}

