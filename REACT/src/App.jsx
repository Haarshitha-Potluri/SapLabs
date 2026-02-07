import React, { useState } from "react";
import "./App.css";

function TodoItem({ task, index, onDelete, onMoveUp, onMoveDown }) {
  return (
    <li className="task-item">
      <span>{task}</span>
      <div>
        <button className="move-btn" onClick={() => onMoveUp(index)}>↑</button>
        <button className="move-btn" onClick={() => onMoveDown(index)}>↓</button>
        <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
      </div>
    </li>
  );
}

function TodoList({ tasks, onDelete, onMoveUp, onMoveDown }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          onDelete={onDelete}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
        />
      ))}
    </ul>
  );
}

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="add-btn" onClick={handleAdd}>Add</button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const moveUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks);
  };
  const moveDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} onMoveUp={moveUp} onMoveDown={moveDown} />
    </div>
  );
}

export default App;
