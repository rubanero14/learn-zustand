import "./Task.css";

// eslint-disable-next-line react/prop-types
const Task = ({ title, status }) => {
  return (
    <div className="task">
      <div className="title">{title}</div>
      <div className={"status " + status}>{status}</div>
    </div>
  );
};

export default Task;
