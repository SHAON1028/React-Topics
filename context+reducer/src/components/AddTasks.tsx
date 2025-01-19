import { useState } from "react";

import { useTasks, useTasksDispatch } from "../provider/TaskProvider";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");

  const dispatch = useTasksDispatch()
  const tasks = useTasks()
  // Ensure dispatch is not null
  if (!dispatch || !tasks) {
    throw new Error(
      "AddTask must be used within TasksContext and TasksDispatchContext providers"
    );
  }
  const handleAddTask = () => {
    if (text.trim() === "") {
      alert("Task text cannot be empty!");
      return;
    }

    dispatch({
      type: "added",
      id: getNextId(tasks),
      text: text.trim(),
    });

    setText("");
  };
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAddTask()}>Add</button>
    </>
  );
}
