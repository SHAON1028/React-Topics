import AddTask from "./components/AddTasks";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./provider/TaskProvider";



export default function App() {
  


  return (
    <>
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}



