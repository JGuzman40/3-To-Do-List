import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ loggedIn, handleLogout }) => {
  const handleLogoutClick = () => {
    handleLogout();  // Llama a la función handleLogout cuando se hace clic
  };

  return (
    <nav>
      <ul>
        {!loggedIn && <li><Link to="/login">Login</Link></li>}
        {loggedIn && <li><Link to="/home">Home</Link></li>}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/diary">Diary</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        {loggedIn && <li><button onClick={handleLogoutClick}>Logout</button></li>}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default NavBar;


