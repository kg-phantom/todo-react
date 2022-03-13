import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do laundry",
      day: "Mar 13",
      reminder: true
    },
    {
      id: 2,
      text: "Finish homework",
      day: "Feb 27",
      reminder: false
    },
  ]);

  // Toggle reminder
  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
