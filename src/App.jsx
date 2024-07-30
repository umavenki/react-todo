import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  }
  function removeTodo(id) {
    const filteredTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodo);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}></TodoList>
      <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
    </div>
  );
}

export default App;
