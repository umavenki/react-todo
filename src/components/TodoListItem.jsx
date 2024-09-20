import style from "./TodoListItem.module.css";
function TodoListItem({ title, onRemoveTodo, id }) {
  return (
    <div>
      <li className={style.ListItem}>
        {title} <button onClick={() => onRemoveTodo(id)}>Remove</button>
      </li>
    </div>
  );
}
export default TodoListItem;
