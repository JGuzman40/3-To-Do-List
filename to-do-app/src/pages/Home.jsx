import { useNavigate } from 'react-router-dom';

function Home() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="welcome">Welcome, {username}!</h2>
      <button className="button" onClick={() => navigate('/diary')}>Go to Diary</button>
      <button className="button" onClick={() => navigate('/profile')}>View Profile</button>
    </div>
  );
}

export default Home;
