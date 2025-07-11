import { useState } from "react";
import "./App.css";
import NavbarComponent from "./app/components/NavbarComponent";
import CreateArea from "./app/components/CreateArea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponent />
      <CreateArea />
    </>
  );
}

export default App;
