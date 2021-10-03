import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [todo, setTodo] = useState([
    {
      listItem: 'Pick up dry cleaning',
      completed: false
    },
    {
      listItem: 'Do dishes',
      completed: true
    },
    {
      listItem: 'Vacuum',
      completed: false
    },
    {
      listItem: 'Buy groceries',
      completed: false
    },
  ])


  const addItemRef = useRef()

  useEffect(() => {
    addItemRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = {
      listItem: addItemRef.current.value,
      completed: false
    }
    setTodo(todo.concat(formData))
  }


  return (
    <div id="App">
      <div className="left-col col">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="addItem">Add Item: </label>
          <br />
          <input
            id="addItem"
            ref={addItemRef}
            type="text"
            required
          />
          <br />
          <button>Add Todo</button>
        </form>
      </div>
      <div className="right-col col">
        {todo.map((list, index) =>
          list.completed === false ?
            <ul key={index}>
              <li class="todo-item">{list.listItem} <button>Not Completed</button></li>
            </ul>
            : <ul key={index}>
              <li class="todo-item completed">{list.listItem} <button>Completed</button></li>
            </ul>)
        }
      </div>
    </div>
  );
}