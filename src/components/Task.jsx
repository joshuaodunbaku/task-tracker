import { FaTimes } from 'react-icons/fa'

const Task = ({ thatTask, deleteThatTask, setReminder }) => {
  return (
    <div className={`task ${thatTask.reminder && "reminder"}`} onDoubleClick={() => setReminder(thatTask.id)}>
      <h3>{thatTask.text} <FaTimes style={{color:"red", cursor:"pointer"}} onClick={() => deleteThatTask(thatTask.id)}/></h3>
      <p className="text-muted">{thatTask.day}</p>
    </div>
  );
};

export default Task;
