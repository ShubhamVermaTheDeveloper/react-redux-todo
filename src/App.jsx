import { useState } from "react";
import "./App.css";
import "./index.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div>Learn about redux toolkit</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
