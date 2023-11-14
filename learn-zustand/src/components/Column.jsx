/* eslint-disable react/prop-types */
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import Modal from "./Modal";
import { useMemo, useState } from "react";

const Column = ({ status, tasks }) => {
  const [drop, setDrop] = useState(false);
  const isModalOpen = useStore((store) => store.isModalOpen);
  const modalStatus = useStore((store) => store.modalStatus);
  const setIsModalOpen = useStore((store) => store.setIsModalOpen);
  const setModalStatus = useStore((store) => store.setModalStatus);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const movedTask = useStore((store) => store.movedTask);
  const title = tasks.map((task) =>
    task.id === draggedTask ? task.title : ""
  );

  // to avoid infinite re-render
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  return (
    <div
      className={"column " + drop}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={() => {
        movedTask(draggedTask, title, status);
        setDrop(false);
        setDraggedTask(null);
      }}
    >
      <div className={"title " + status}>
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

      <hr className={"divider " + status} />

      {filteredTasks.reverse().map((task) => (
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
