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
          return <li key={t.id}>{t.title} </li>;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
