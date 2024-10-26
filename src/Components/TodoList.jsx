import { addListener } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/Todo/TodoSlice";

function TodoList() {
  const todos = useSelector((state) => state.Todo.todos);
  console.log("Todos clg: ", todos);
  const dispatch = useDispatch();

  let styleTask = {
    fontSize: "1.1rem"
}

// let listStyles = {
//   display: "flex",
//   width: "700px",
//   justifyContent: "space-between",
//   marginTop: "1rem",
// };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((eachTodo) => (
          <li key={eachTodo.id} style={{ marginBottom: "0.6rem" }}>
            {/* {eachTodo.task} */}
            <span
              style={{
                ...styleTask,
                textDecoration: eachTodo.isDone ? "line-through" : "none",
              }}
            >
              {eachTodo.task}
            </span>

            &nbsp; &nbsp;
            <button
              onClick={() => dispatch(deleteTodo(eachTodo.id))}
              style={{
                backgroundColor: "red",
                color: "white",
                borderColor: "red",
              }}
            >
              Delete
            </button>
            &nbsp; &nbsp;
            <button
              onClick={() => dispatch(markAsDone(eachTodo.id))}
              style={{
                backgroundColor: eachTodo.isDone ? "green" : "#1a1a1a",
                color: "white",
                border: "2px solid #1a1a1a",
              }}
            >
              { eachTodo.isDone ? "Task Done" : "Mark As Done" }
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;

