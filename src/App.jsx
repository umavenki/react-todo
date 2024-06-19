import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const todo = [
  { id: 0, title: "Complete week 1 asssignment" },
  { id: 1, title: "Hello world " },
  { id: 2, title: "Good evening" },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todo.map((t) => {
          return <li key={t.id}>{t.title} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
