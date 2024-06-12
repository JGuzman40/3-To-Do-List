import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Diary from './pages/Diary';
import UserProfile from './pages/UserProfile';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [completedTasks, setCompletedTasks] = useState(JSON.parse(localStorage.getItem('completedTasks')) || []);

  // Efecto para actualizar localStorage cuando cambian tasks y completedTasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  // Función para manejar el inicio de sesión
  const handleLogin = (username) => {
    localStorage.setItem('username', username);
    setUsername(username);
    setLoggedIn(true);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('tasks');
    localStorage.removeItem('completedTasks');
    setUsername('');
    setLoggedIn(false);
    setTasks([]);
    setCompletedTasks([]);
  };

  // Función para agregar una nueva tarea
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Función para marcar una tarea como completada
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true, completedAt: new Date().toLocaleString() } : task
    );
    setTasks(updatedTasks);

    // Agregar la tarea completada al estado de completedTasks
    const completedTask = updatedTasks.find(task => task.id === taskId);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      {loggedIn ? (
        <>
          <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
          <Routes>
            <Route
              path="/home"
              element={<Home username={username} tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} addTask={addTask} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/diary" element={<Diary completedTasks={completedTasks} />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
