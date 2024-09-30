import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <ul>
        {todoList.map((t) => {
          return (
            <TodoListItem
              key={t.id}
              title={t.title}
              onRemoveTodo={onRemoveTodo}
              id={t.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};
export default TodoList;
