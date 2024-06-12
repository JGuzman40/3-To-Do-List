import PropTypes from 'prop-types';

const TodoItem = ({ task, completeTask }) => {
  const handleComplete = () => {
    const updatedTask = {
      ...task,
      completed: true,
      completedAt: new Date().toISOString(), // Update completedAt with current ISO date
    };
    completeTask(updatedTask);
  };

  return (
    <div className="todo-item">
      <p>{task.content}</p>
      {!task.completed && (
        <button onClick={handleComplete}>Complete</button>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
};

export default TodoItem;