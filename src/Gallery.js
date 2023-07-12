import React from 'react'
import { useState } from 'react';
import "./Gallery.css"

function Gallery() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask("");
  };

  const removeTodo = (task) => {
    const search = todo.filter((el) => el !== task);
    setTodo(search);
  };

  return (
    <>
      <div className="App">
        <form onSubmit={addTodo}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="todos">
        {todo.length > 0 ? (
          todo.map((task, index) => (
            <div key={index}>
              <h3>{task}</h3>
              <button onClick={() => removeTodo(task)}>Mark Done</button>
            </div>
          ))
        ) : (
          <p>No available tasks. Add some.</p>
        )}
      </div>
    </>
  );
}

export default Gallery