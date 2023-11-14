import "./App.css";
import Column from "./components/Column";
import { useStore } from "./store";
import { useMemo } from "react";

const statuses = ["planned", "ongoing", "done"];

function App() {
  const tasks = useStore((store) => store.tasks);
  return (
    <>
      {statuses.map((status) => (
        <Column status={status} key={status} tasks={tasks} />
      ))}
    </>
  );
}

export default App;
