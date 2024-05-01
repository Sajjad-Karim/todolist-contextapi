import { createContext } from "react";

const todoContext = createContext({
  todos: [
    {
      //   id: 1,
      //   title: "Learn React",
      //   completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleCompleteTodo: (todo, id) => {},
});
export default todoContext;

export const TodoProvider = todoContext.Provider;
