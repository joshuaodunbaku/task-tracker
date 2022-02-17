import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // const name = 'Bobby';
  // const x = false;
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors ApAddpointment',
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
  
  // A d d   T a s k
  const addTask = (task) => {
    console.log(task);
    // const {setText, setDay, setRemider} = {...task};

    // C R E A T I N G  AN ID FOR THE NEW TASK
    const id = tasks.length + 1;
    // A D D I N G   THE TASK TO THE STATE
    setTask([...tasks, {...task, id}]);
  }
  
  // T o g g l e   a d d   b u t t o n
  const onToggleAddTask = (tog) => {
    console.log(!tog, "from app.js");
    const newTog = !tog;
    setShowTaskForm(newTog);
  }

  return (
    <div className='container'>
      {/* <h1>Hello From React</h1>
      <h2>Hello {x ? 'Joshua' : name}</h2> */}
      <Header title={'Task Tracker'} onToggleAddTask={() => setShowTaskForm(!showTaskForm)} showTaskForm={showTaskForm}/>

      {showTaskForm && <AddTask onAdd={addTask} onToggleAddTask={onToggleAddTask} showTaskForm={showTaskForm}/>}
      
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
