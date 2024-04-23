import React, { useState, useRef } from 'react'

const ToDoList = () => {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  const inputRef = useRef(null)


  // To show the text when type in input
  function handleInputChange() {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
      setIsEmptyInput(false); // Reset to false if input is not empty
    } else {
      setIsEmptyInput(true);
      inputRef.current.focus(); // Focus on the input
    }
  }

  // The underscore in the param means this should be ignored
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, currentIndex) => currentIndex !== index)
    setTasks(updatedTasks)
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      //De=structuring the array
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      //De=structuring the array
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">

      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      {isEmptyInput && <p className='empty-message'>👆 Please enter a task... 👆</p>}
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ToDoList