import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulando inicio de sesión exitoso
    localStorage.setItem('username', username);
    navigate('/home');
  };

  return (
    <div className="container">
      <h2 className="welcome">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="input"  // Usa la clase de estilo global para el input
        />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
