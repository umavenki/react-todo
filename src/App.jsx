import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>TodoList</h1>
      <TodoList></TodoList>
      <AddTodoForm onAddTodo={setNewTodo}></AddTodoForm>
      <p>{newTodo}</p>
    </div>
  );
}

export default App;
