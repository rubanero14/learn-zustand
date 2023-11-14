import { useStore } from "../store";
import "./Task.css";
import SVG from "./SVG";

// eslint-disable-next-line react/prop-types
const Task = ({ id }) => {
  const task = useStore((store) => store.tasks.find((task) => task.id === id));
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const upperCaseFirstLetterTaskStatus =
    task.status[0].toUpperCase() + task.status.slice(1);

  return (
    <div
      className="task-wrapper"
      draggable
      onDragStart={() => {
        setDraggedTask(id);
      }}
    >
      <div className={"task " + task.status} key={task.id}>
        <div className="title" contentEditable={true}>
          {task.title}
        </div>
        <button
          className={"deleteButton " + task.status}
          title={"Delete Task for " + task.title}
          onClick={() => deleteTask(task.id)}
        >
          <SVG
            className="trash-icon"
            viewBox="0 0 16 16"
            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
          />
        </button>
        <div
          className={"status " + task.status}
          title={"Status: " + upperCaseFirstLetterTaskStatus}
        >
          {upperCaseFirstLetterTaskStatus}
        </div>
      </div>
    </div>
  );
};

export default Task;
