import { useState } from "react";
import { useTasksDispatch } from "../provider/TaskProvider";
import { TaskType } from "../type";


export function Task({ task }: { task: TaskType }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch()

  // Ensure dispatch is not null
  if (!dispatch) {
    throw new Error("Task must be used within TasksDispatchContext provider");
  }

  const handleUpdateTask = (updatedTask: TaskType) => {
    dispatch({ type: "changed", task: updatedTask });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({ type: "deleted", id: taskId });
  };

  const handleSave = () => {
    if (task.text.trim() === "") {
      alert("Task name cannot be empty!");
      return;
    }
    setIsEditing(false);
  };

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            handleUpdateTask({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={handleSave}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          handleUpdateTask({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </label>
  );
}
