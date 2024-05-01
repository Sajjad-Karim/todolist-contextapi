import TodoForm from "../todoForm/TodoForm";
import TodosList from "../todosList/TodosList";
const Todo = () => {
  return (
    <>
      <div style={styling.container}>
        <div style={styling.todoApp}>
          <div>
            <h1 style={styling.heading}>Manage Your Todos</h1>
          </div>
          <div>
            <TodoForm />
          </div>
          <div style={styling.listcon}>
            <TodosList />
            <TodosList />
          </div>
        </div>
      </div>
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
