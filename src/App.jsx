import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import styles from "./App.module.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(` Error: ${response.status}`);
      }
      const data = await response.json();

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });
      const sortedTodos = sortTodos(todos, sortAsc);

      setTodoList(sortedTodos);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (newTodo) => {
    try {
      const airtableData = {
        records: [
          {
            fields: {
              title: newTodo.title,
            },
          },
        ],
      };
      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${import.meta.env.VITE_TABLE_NAME}`;
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtableData),
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(` Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const deleteData = async (id) => {
    try {
      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${import.meta.env.VITE_TABLE_NAME}/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(` Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  async function addTodo(newTodo) {
    const response = await postData(newTodo);
    const post = response.records[0];
    const todo = { id: post.id, title: post.fields.title };
    const newTodoList = [...todoList, todo];

    const sortedTodos = sortTodos(newTodoList, sortAsc);

    setTodoList(sortedTodos);
  }
  async function removeTodo(id) {
    const record = await deleteData(id);

    const filteredTodo = todoList.filter((todo) => todo.id !== record.id);
    setTodoList(filteredTodo);
  }
  function sortTodosAscending(objectA, objectB) {
    if (objectA < objectB) {
      return -1;
    } else if (objectA > objectB) {
      return 1;
    } else {
      return 0;
    }
  }
  function sortTodosDescending(objectA, objectB) {
    if (objectA < objectB) {
      return 1;
    } else if (objectA > objectB) {
      return -1;
    } else {
      return 0;
    }
  }
  function sortTodos(todos, sortAsc) {
    return todos.sort((objectA, objectB) => {
      if (sortAsc) {
        return sortTodosAscending(objectA.title, objectB.title);
      } else {
        return sortTodosDescending(objectA.title, objectB.title);
      }
    });
  }
  function handleSortToggle() {
    setSortAsc(!sortAsc);
    setTodoList((prevTodoList) => sortTodos(prevTodoList, !sortAsc));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={
            <main className={styles.app}>
              <section className={styles.section}>
                <h1>TodoList</h1>
                <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
                <button
                  className={styles.toggleButton}
                  onClick={handleSortToggle}
                >
                  Toggle (Asc/Des)
                </button>
                {isLoading ? (
                  <p>"Loading..." </p>
                ) : (
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={removeTodo}
                  ></TodoList>
                )}
              </section>
            </main>
          }
        ></Route>
        <Route path="/" element={<Splash />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
