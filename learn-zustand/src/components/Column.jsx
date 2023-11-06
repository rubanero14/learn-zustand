/* eslint-disable react/prop-types */
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import Modal from "./Modal";
import { useMemo } from "react";

const Column = ({ status }) => {
  const isModalOpen = useStore((store) => store.isModalOpen);
  const modalStatus = useStore((store) => store.modalStatus);
  const setIsModalOpen = useStore((store) => store.setIsModalOpen);
  const setModalStatus = useStore((store) => store.setModalStatus);
  const tasks = useStore((store) => store.tasks);

  // to avoid infinite re-render
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  return (
    <div className="column">
      <div className="title">
        <p>
          <strong>{status.toUpperCase()}</strong>
        </p>
        <button
          className={"button " + status}
          title="Add new tasks"
          onClick={() => {
            setIsModalOpen(true);
            setModalStatus(status);
          }}
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

      {isModalOpen && status === modalStatus && <Modal status={status} />}
    </div>
  );
};

export default Column;
