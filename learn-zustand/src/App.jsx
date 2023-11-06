import "./App.css";
import Column from "./components/Column";

const statuses = ["planned", "ongoing", "done"];

function App() {
  return (
    <>
      {statuses.map((status) => (
        <Column status={status} key={status} />
      ))}
    </>
  );
}

export default App;
