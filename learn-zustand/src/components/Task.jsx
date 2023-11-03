import { useStore } from "../store";
import "./Task.css";

// eslint-disable-next-line react/prop-types
const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  return (
    <div className="task">
      <div className="title">{task.title}</div>
      <div className={"status " + task.status}>{task.status}</div>
    </div>
  );
};

export default Task;
