import { useStore } from "../store";
import "./Task.css";

// eslint-disable-next-line react/prop-types
const Task = ({ id }) => {
  const task = useStore((store) => store.tasks.find((task) => task.id === id));
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div className="task" key={task.id}>
      <div className="title">{task.title}</div>
      <button
        className={"deleteButton " + task.status}
        title={"Delete Task for " + task.title}
        onClick={() => deleteTask(task.id)}
      >
        -
      </button>
      <div className={"status " + task.status}>
        {task.status[0].toUpperCase() + task.status.slice(1)}
      </div>
    </div>
  );
};

export default Task;
