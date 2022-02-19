import { useState } from "react";
import Button from "./Button";

const AddTask = ({onAdd, onToggleAddTask, showTaskForm}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert("Please add text");
            return;
        }
        
        onAdd({text, day, reminder});
        setText("")
        setDay("")
        setReminder(false);
        onToggleAddTask(showTaskForm);
        console.log("This is from onSubmit")

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="">Day &amp; Time</label>
            <input type="text" placeholder="Set Day" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <Button text="Save" className="btn btn-block" />
    </form>
  )
}

export default AddTask