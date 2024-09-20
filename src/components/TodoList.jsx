import TodoListItem from "../TodoListItem";

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
export default TodoList;
