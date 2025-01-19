import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import { Task } from "./Task";

export default function TaskList() {

  const tasks = useContext(TasksContext)

  console.log(tasks)
  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task}  />
        </li>
      ))}
    </ul>
  );
}


