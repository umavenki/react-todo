function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.title);
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  }

  return (
    <div>
      <h1> AddTodoForm</h1>
      <form onSubmit={handleAddTodo}>
        <label>
          Title
          <input id="todoTitle" name="title" />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
