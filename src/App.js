import { useState } from 'react';
import './index.css';
import Header from "./components/Header";
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Do laundry",
        day: "Mar 13"
    },
    {
        id: 2,
        text: "Finish homework",
        day: "Feb 27"
    }
]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
