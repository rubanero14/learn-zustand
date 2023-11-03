import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <>
      <Column status="planned" />
      <Column status="ongoing" />
      <Column status="done" />
    </>
  );
}

export default App;
