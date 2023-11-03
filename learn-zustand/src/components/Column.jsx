/* eslint-disable react/prop-types */
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import { useMemo } from "react";

const Column = ({ status }) => {
  const tasks = useStore((store) => store.tasks);

  // to avoid infinite re-render
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="title">
        <p>{status}</p>
        <button
          className={"button " + status}
          title="Add new tasks"
          onClick={() => addTask("Kanban Zustand Learning", status)}
        >
          +
        </button>
      </div>

      {filteredTasks.map((task) => (
        <Task title={task.title} status={task.status} key={task.title} />
      ))}
    </div>
  );
};

export default Column;
