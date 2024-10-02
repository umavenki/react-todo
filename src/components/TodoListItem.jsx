import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
function TodoListItem({ title, onRemoveTodo, id }) {
  return (
    <div>
      <li className={style.ListItem}>
        {title}{" "}
        <button
          className="delete-button"
          onClick={() => onRemoveTodo(id)}
        ></button>
      </li>
    </div>
  );
}
TodoListItem.prototype = {
  title: PropTypes.string,
  onRemoveTodo: PropTypes.func,
  id: PropTypes.string,
};
export default TodoListItem;
