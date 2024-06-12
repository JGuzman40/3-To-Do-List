// src/components/TodoForm.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // Trim spaces and check if empty

    const newTask = {
      id: new Date().getTime().toString(),
      content: task,
      completed: false,
      createdAt: new Date().toISOString(), // Use ISO format for createdAt timestamp
      completedAt: null, // Initialize completedAt as null initially
    };

    addTask(newTask);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        id="taskInput"
        name="taskInput"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TodoForm;
