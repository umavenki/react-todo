import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

//function useSemiPersistentState() {
//const [todoList, setTodoList] = useState(
// JSON.parse(localStorage.getItem("savedTodoList")) || []
//);

//useEffect(() => {
//  localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//}, [todoList]);

// return [todoList, setTodoList];
//}
function App() {
  //const [todoList, setTodoList] = useSemiPersistentState();

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const object = {
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        };
        resolve(object);
      }, 2000);
    }).then((result) => {
      console.log(result.data);
      setTodoList(result.data.todoList);

      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

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
      {isLoading ? (
        <p>"Loading..." </p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}></TodoList>
      )}

      <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
    </div>
  );
}

export default App;
