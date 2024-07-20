import { useState } from "react";

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
      <h1> AddTodoForm</h1>
      <form onSubmit={handleAddTodo}>
        <label>
          Title
          <input
            id="todoTitle"
            name="title"
            value={todoTitle}
            onChange={handleTitleChange}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
