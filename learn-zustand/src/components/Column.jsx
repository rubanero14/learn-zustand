/* eslint-disable react/prop-types */
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import Modal from "./Modal";
import { useMemo } from "react";

const Column = ({ status }) => {
  const isModalOpen = useStore((store) => store.isModalOpen);
  const toggleModal = useStore((store) => store.setIsModalOpen);
  const tasks = useStore((store) => store.tasks);
  console.log(isModalOpen);

  // to avoid infinite re-render
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  return (
    <div className="column">
      <div className="title">
        <p>{status[0].toUpperCase() + status.slice(1)}</p>
        <button
          className={"button " + status}
          title="Add new tasks"
          onClick={() => toggleModal}
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
      {isModalOpen && <Modal />}
      <Modal />
    </div>
  );
};

export default Column;
