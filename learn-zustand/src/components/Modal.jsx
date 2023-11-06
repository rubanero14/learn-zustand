import { useStore } from "../store";
import { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const tasks = useStore((store) => store.tasks);
  const setIsModalOpen = useStore((store) => store.setIsModalOpen);

  const id = () => {
    return Math.random() * tasks.length * 10000000000000000;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const useAddTask = (e) => {
    e.preventDefault();
    useStore((store) => store.addTask(id(), title, status));
    setTitle("");
    setStatus("");
    setIsModalOpen(false);
  };

  return createPortal(
    <>
      <div className="modal-shade" onClick={() => setIsModalOpen(false)}></div>
      <form className="modal-form" onSubmit={() => useAddTask}>
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
        <input
          type="text"
          name="status"
          className="input"
          placeholder="Add Status.."
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
        <br />
        <div className="actions">
          <button className="button" type="submit" title="Add New Kanban Task">
            Add New Task
          </button>
          <button
            className="button"
            type="reset"
            title="Reset Form"
            onClick={() => {
              setTitle("");
              setStatus("");
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
              setStatus("");
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </>,
    document.querySelector("body")
  );
};

export default Modal;
