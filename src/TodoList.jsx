import TodoListItem from "./TodoListItem";
const todo = [
  { id: 0, title: "Complete week 1 asssignment" },
  { id: 1, title: "Hello world " },
  { id: 2, title: "Good evening" },
];
function TodoList() {
  return (
    <div>
      <ul>
        {todo.map((t) => {
          return <TodoListItem key={t.id} title={t.title} />;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
