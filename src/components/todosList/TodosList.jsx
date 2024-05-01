import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
const TodosList = () => {
  return (
    <>
      <div style={style.container}>
        <div style={style.fieldContainer}>
          <input type="checkbox" style={style.checkbox} />
          <input
            type="type"
            defaultValue="learn Dsa"
            style={style.input}
            readOnly
          />
        </div>
        <div style={style.fieldContainer}>
          <button style={style.btn}>
            <CiEdit />
          </button>
          <button style={style.btn}>
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
