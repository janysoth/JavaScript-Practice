import React, {useState} from 'react'

const ToDoList = () => {

  const [tasks, setTasks] = useState(["Eat Breakfast", "Take A Shower", "Play With The Kids"])
  const [newTask, setNewTask] = useState("")

  // To show the text when type in input
  function handleInputChange(){
    setNewTask(event.target.value)
  }

  function addTask(){

  }

  function deleteTask(index) {

  }

  function moveTaskUp(index) {

  }

  function moveTaskDown(index) {

  }

  return (
    <div className="to-do-list">

      <h1>To-Do-List</h1>

      <div>
        <input 
          type="text"
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