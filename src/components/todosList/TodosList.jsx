import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import todoContext from "../../context/todoContext";
import { useContext, useState } from "react";
const TodosList = ({ todo }) => {
  const { updateTodo, deleteTodo, toggleCompleteTodo } =
    useContext(todoContext);
  const [editable, setEditable] = useState(false);
  const [newMes, setNewMes] = useState(todo.todo);
  const performEdit = () => {
    setEditable(!editable);
    updateTodo(todo.id, { ...todo, newMes: newMes });
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const toogleComplete = () => {
    toggleCompleteTodo(todo.id);
  };

  return (
    <>
      <div
        style={{
          ...style.container,
          background: `${todo.completed ? "#2c2c2c" : "#333333"}`,
        }}
      >
        <div style={style.fieldContainer}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toogleComplete}
          />
          <input
            type="type"
            value={newMes}
            style={{
              ...style.input,
              textDecoration: `${todo.completed ? "line-through" : "none"}`,
            }}
            readOnly={!editable}
            onChange={(e) => setNewMes(e.target.value)}
          />
        </div>
        <div style={style.fieldContainer}>
          <button
            style={style.btn}
            onClick={performEdit}
            disabled={todo.completed}
          >
            {editable ? <FaSave /> : <CiEdit />}
          </button>
          <button style={style.btn} onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};
export default TodosList;
const style = {
  container: {
    background: "#333333",
    width: "600px",
    borderRadius: "5px",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px",
    // margin: "10px 0px",
    alignItems: "center",
  },
  fieldContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  input: {
    height: "30px",
    borderRadius: "5px",
    width: "300px",
    background: "transparent",
    color: "white",
    outline: "none",
    padding: "5px 10px",
    border: "1px solid black",
    line: "through",
  },
  checkbox: {
    cursor: "pointer",
  },
  btn: {
    padding: "10px",
    background: "#3d3d3d",
    color: "white",
    borderRadius: "5px",
  },
};
