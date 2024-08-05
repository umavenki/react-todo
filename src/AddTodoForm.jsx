import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.title);
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    console.log(todoTitle);
    onAddTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
