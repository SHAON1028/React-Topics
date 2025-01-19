import { ActionType, TaskType } from "./type";


export function tasksReducer(tasks: TaskType[], action:ActionType) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t:TaskType) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t:TaskType) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + (action as ActionType).type);
    }
  }
}
