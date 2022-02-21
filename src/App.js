import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // const name = 'Bobby';
  // const x = false;
  const [loading, setLoading] = useState(true);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTask(taskFromServer);
      setLoading(false);
    }
    getTasks();

  }, [])
  // Calling the Json-server Database
  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    // setLoading(false);
    const data = await res.json();
    console.log(data);
    return data;
  }
  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    // setLoading(false);
    const data = await res.json();
    console.log(data);
    return data;
  }
  

  // D e l e t e   T a s k
  const deleteTask = async (thatTaskId) => {
    // console.log("delete", id)
    await fetch(`http://localhost:5000/tasks/${thatTaskId}`, {
      method: "DELETE",
    })

    setTask(tasks.filter(elem => elem.id !== thatTaskId))
  }
  
  // T o g g l e   R e m i n d e r
  const toggleReminder = async (thatTaskId) => {
    const taskToToggle = await fetchTask(thatTaskId);
    const upTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${thatTaskId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(upTask)
    })
    const data = res.json();
    
    console.log("toggle clicked", upTask);
    setTask(
      tasks.map((task) => 
        task.id === thatTaskId ? { ...task, reminder: !task.reminder } : task
        )
      )
  }
  
  // A d d   T a s k
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(task),
    })
    const data = await res.json();
    setTask([...tasks, data])

    console.log(task);
    // const {setText, setDay, setRemider} = {...task};

    // // C R E A T I N G  AN ID FOR THE NEW TASK
    // const id = Math.floor(Math.random() * 10000) + 1;
    // // A D D I N G   THE TASK TO THE STATE
    // setTask([...tasks, {...task, id}]);
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
      
      {loading ? <div className="spinner-border"></div> : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} loading={loading}/>}
    </div>
  );
}

export default App;
