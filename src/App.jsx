import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoList></TodoList>
      <AddTodoForm></AddTodoForm>
    </div>
  );
}

export default App;
