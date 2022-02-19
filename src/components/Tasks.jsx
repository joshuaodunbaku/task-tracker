import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggle, loading}) => {
    return (
        <>
        {!loading && tasks.length === 0 && "There are no tasks to show"}
        {tasks.map((theTask) => <Task key={theTask.id} thatTask={theTask} deleteThatTask={onDelete} setReminder={onToggle}/>)}
        </>
    )
}

export default Tasks