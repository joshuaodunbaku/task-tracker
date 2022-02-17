import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // const name = 'Bobby';
  // const x = false;
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])
  // D e l e t e   T a s k
  const deleteTask = (thatTaskId) => {
    // console.log("delete", id)
    setTask(tasks.filter(elem => elem.id !== thatTaskId))
  }
  // T o g g l e   R e m i n d e r
  const toggleReminder = (thatTaskId) => {
    console.log("toggle clicked", thatTaskId);
    setTask(
      tasks.map((task) => 
        task.id === thatTaskId ? { ...task, reminder: !task.reminder } : task
        )
      )
  }

  return (
    <div className='container'>
      {/* <h1>Hello From React</h1>
      <h2>Hello {x ? 'Joshua' : name}</h2> */}
      <AddTask />
      <Header title={'Task Tracker'}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
