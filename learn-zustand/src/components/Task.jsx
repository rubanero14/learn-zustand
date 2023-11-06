import { useStore } from "../store";
import "./Task.css";

// eslint-disable-next-line react/prop-types
const Task = ({ id }) => {
  const task = useStore((store) => store.tasks.find((task) => task.id === id));

  return (
    <div className="task" key={task.id}>
      <div className="title">{task.title}</div>
      <div className={"status " + task.status}>
        {task.status[0].toUpperCase() + task.status.slice(1)}
      </div>
    </div>
  );
};

export default Task;
