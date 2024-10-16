import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
    };

    onAddTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo} className={styles.form}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button className={styles.addButton} type="submit"></button>
      </form>
    </div>
  );
}
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};
export default AddTodoForm;
