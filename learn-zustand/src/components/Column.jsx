import "./Column.css";
import Task from "./Task";

// eslint-disable-next-line react/prop-types
const Column = ({ state }) => {
  return (
    <div className="column">
      <p>{state}</p>
      <Task title="TODO" status={state} />
    </div>
  );
};

export default Column;
