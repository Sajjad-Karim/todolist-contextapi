import { useContext, useState } from "react";
import todoContext from "../../context/todoContext";
const TodoForm = () => {
  const { addTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  const add = (e) => {
    e.preventDefault();
    setTodo("");
    if (todo === "") return;
    addTodo({ todo: todo, completed: false });
  };
  return (
    <>
      <div style={styling.container}>
        <form style={styling.form} onSubmit={add}>
          <input
            style={styling.input}
            type="text"
            placeholder="write todos..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button style={styling.button} type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default TodoForm;
const styling = {
  container: {},
  form: {
    width: "600px",
    borderRadius: "5px",
    height: "40px",
    backgroundColor: "#333333",
    display: "flex",
    alignItems: "center",
  },
  input: {
    height: "100%",
    width: "90%",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    background: "transparent",
    boxSizing: "border-box",
    padding: "5px 10px",
    color: "white",
  },
  button: {
    background: "#3d3d3d",
    color: "white",
    height: "100%",
    fontweight: "bold",
    width: "10%",
    borderRadius: "0px 5px 5px 0px ",
  },
};
