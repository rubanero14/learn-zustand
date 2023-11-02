import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <>
      <Column state="planned" />
      <Column state="ongoing" />
      <Column state="done" />
    </>
  );
}

export default App;
