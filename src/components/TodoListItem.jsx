import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";
function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <div>
      <li className={styles.ListItem}>
        <p>{todo.title} </p>
        <button
          className={styles.removeButton}
          onClick={() => onRemoveTodo(todo.id)}
        ></button>
      </li>
    </div>
  );
}
TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};
export default TodoListItem;
