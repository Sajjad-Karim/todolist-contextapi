import TodoForm from "../todoForm/TodoForm";
import TodosList from "../todosList/TodosList";
import { TodoProvider } from "../../context/todoContext";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((preVal) => [...preVal, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((preVal) =>
      preVal.map((preVa) => (preVal.id === id ? todo : preVa))
    );
  };
  const toggleCompleteTodo = (id) => {
    setTodos((preVal) =>
      preVal.map((preVa) =>
        preVa.id === id ? { ...preVa, completed: !preVa.completed } : preVa
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((preVal) => preVal.filter((prev) => prev.id != id));
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <TodoProvider
        value={{ todos, updateTodo, addTodo, toggleCompleteTodo, deleteTodo }}
      >
        <div style={styling.container}>
          <div style={styling.todoApp}>
            <div>
              <h1 style={styling.heading}>Manage Your Todos</h1>
            </div>
            <div>
              <TodoForm />
            </div>
            <div style={styling.listcon}>
              {todos.map((todo, index) => {
                return <TodosList todo={todo} key={index} />;
              })}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
};
export default Todo;

const styling = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#181717",

    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
    // alignItems: "center",
  },
  todoApp: {
    background: "#292929",
    padding: "10px",
    width: "700px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    borderRadius: "10px",
    height: "fit-content",
    maxHeight: "500px",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  listcon: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
