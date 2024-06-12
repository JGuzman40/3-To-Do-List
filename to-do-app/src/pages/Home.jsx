import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Home.css';

const Home = ({ username, tasks, completeTask, deleteTask, addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: new Date().getTime().toString(),
      content: newTask,
      completed: false,
      createdAt: new Date().toISOString(), // Formato ISO para la fecha de creación
    };

    addTask(task);
    setNewTask('');
  };

  const handleCompleteTask = (taskId) => {
    const completedAt = new Date().toISOString(); // Obtenemos la fecha de completado
    completeTask(taskId, completedAt); // Pasamos la fecha de completado aquí
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="welcome">{username}!</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            id="taskInput"
            name="taskInput"
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">
            Add Task
          </button>
        </form>

        <h2>Tasks</h2>
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <span>{task.content}</span>
              {!task.completed && (
                <button className="button" onClick={() => handleCompleteTask(task.id)}>
                  Complete
                </button>
              )}
              {task.completed && (
                <>
                  <button className="button" onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                  <br />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Home;