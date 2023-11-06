import { useStore } from "../store";
import { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ status }) => {
  const [title, setTitle] = useState("");
  const tasks = useStore((store) => store.tasks);
  const setIsModalOpen = useStore((store) => store.setIsModalOpen);
  const setModalStatus = useStore((store) => store.setModalStatus);

  const id = () => {
    return Math.random() * tasks.length * 10000000000000000;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addTask = useStore((store) => store.addTask);

  return createPortal(
    <>
      <div className="modal-shade" onClick={() => setIsModalOpen(false)}></div>
      <div className="modal-form">
        <div className="modal-title">
          <h3>Add New Kanban Task</h3>
        </div>
        <input
          type="text"
          name="title"
          className="input"
          placeholder="Add Title.."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <div className="actions">
          <button
            className="button"
            type="submit"
            title="Add New Kanban Task"
            onClick={(e) => {
              e.preventDefault();
              addTask(id(), title, status);
              console.log(tasks);
              setTitle("");
              setModalStatus("");
              setIsModalOpen(false);
            }}
          >
            Add New Task
          </button>
          <button
            className="button"
            type="reset"
            title="Reset Form"
            onClick={() => {
              setTitle("");
            }}
          >
            Reset Form
          </button>
          <button
            className="button"
            type="button"
            title="Close Modal"
            onClick={() => {
              setTitle("");
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>,
    document.querySelector("body")
  );
};

export default Modal;
