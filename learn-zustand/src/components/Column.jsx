/* eslint-disable react/prop-types */
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import { useMemo, useState } from "react";

const Column = ({ status }) => {
  const [ticket, setTicket] = useState("");
  const tasks = useStore((store) => store.tasks);
  console.log(tasks);

  const id = () => {
    return Math.random() * tasks.length * 10000000000000000;
  };

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
          onClick={() => addTask(id(), "Kanban Zustand Learning", status)}
        >
          +
        </button>
      </div>

      {filteredTasks.map((task) => (
        <Task
          title={task.title}
          status={task.status}
          key={task.id}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default Column;
