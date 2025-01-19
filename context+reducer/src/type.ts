export type TaskType = {
  id: number;
  text: string;
  done: boolean;
};

export type TasksType = {
  tasks: TaskType[];
  onChangeTask?: (task: TaskType) => void;
  onDeleteTask?: (taskId: number) => void;
};


type Added = {
  type: "added";
  id: number;
  text: string;
}

type Changed = {
  type: "changed";
  task: TaskType;
}

type Deleted = {
  type: "deleted";
  id: number;
}

export type ActionType =  Added | Changed | Deleted;