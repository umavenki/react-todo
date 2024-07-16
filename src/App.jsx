import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList((prevTododList) => [...prevTododList, newTodo]);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <TodoList todoList={todoList}></TodoList>
      <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
    </div>
  );
}

export default App;
