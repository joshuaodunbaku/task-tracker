import { useState } from "react";
import Button from "./Button";

const AddTask = () => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState("");

  return (
    <form className="add-form">
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add Task" />
        </div>
        <div className="form-control">
            <label htmlFor="">Day &amp; Time</label>
            <input type="text" placeholder="Set Day" />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox" placeholder="Add Task" />
        </div>
        {/* <input className="btn btn-block" type="submit" value="Save" /> */}
        <Button text="Save" className="btn btn-block" />
    </form>
  )
}

export default AddTask