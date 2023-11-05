import { useStore } from "../store";
import { useState } from "react";
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

  return (
    <>
      <div className="modal-shade" onClick={() => setIsModalOpen(false)}></div>
      <form className="modal-form" onSubmit={() => useAddTask}>
        <input
          type="text"
          name="title"
          placeholder="Title.."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br className="dividers" />
        <input
          type="text"
          name="status"
          placeholder="Status.."
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
        <br className="dividers" />
        <button className="button" type="submit" title="Add New Kanban Task">
          +
        </button>
      </form>
    </>
  );
};

export default Modal;
