import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((t) => {
          return <TodoListItem key={t.id} title={t.title} />;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
