import { TaskType } from "../type";



export function getNextId(tasks: TaskType[] ) {
        const maxId =tasks.reduce((curr,acc)=>Math.max(curr,acc.id),0)
        return maxId + 1
}