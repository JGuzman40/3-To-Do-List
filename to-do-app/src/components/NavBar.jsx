import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/diary">Diary</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;