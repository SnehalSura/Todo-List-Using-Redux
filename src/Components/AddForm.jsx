import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";
import { message } from "antd";

function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  let inputStyles = {
    padding: "10px",
    width: "13rem",
    fontSize: "1rem",
    border: "2px solid lightblue",
    marginRight: "0.5rem",
  };

  let buttonStyles = {
    padding: "10px",
    marginBottom: "1rem",
    backgroundColor: "#636395",
    color: "white",
    border: "2px solid blueviolet",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      dispatch(addTodo(task));
      setTask("");
    } else {
      setShowError();
    }
  };

  function setShowError(){
    messageApi.open({
        type: 'error',
        content: 'Please enter a task before adding.',
        style: {
        marginTop: '1vh',
        fontSize: '1rem',
      },
      duration: 3,
      });
  }

  return (
    
    <form onSubmit={handleSubmit}>
      {contextHolder}
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(event) => setTask(event.target.value)}

        style={inputStyles}
      />

      <button style={buttonStyles}>
        Add Task
      </button>
    </form>
  );
}

export default AddForm;
