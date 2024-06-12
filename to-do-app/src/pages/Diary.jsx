import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Diary.css';

const Diary = ({ completedTasks }) => {
  const [selectedDate, setSelectedDate] = useState('');

  // Obtener todas las fechas únicas de tareas completadas
  const uniqueDates = [...new Set(completedTasks.map(task => task.completedAt.split(',')[0]))];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="diary-container">
      <div className="diary-dates">
        {uniqueDates.map((date, index) => (
          <button key={index} onClick={() => handleDateClick(date)} className={date === selectedDate ? 'selected' : ''}>
            {date}
          </button>
        ))}
      </div>
      <div className="diary-content">
        {completedTasks
          .filter(task => task.completedAt.split(',')[0] === selectedDate)
          .map((task, index) => (
            <p key={index}>{task.content}</p>
          ))}
      </div>
    </div>
  );
};

Diary.propTypes = {
  completedTasks: PropTypes.array.isRequired,
};

export default Diary;
