// components/Header.js
import { NavLink } from 'react-router';
import style from '../style/style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="customer-name">
        <h1>Jitendra Kumar</h1>
      </div>
      
      <nav className="nav-center">
        <ul>
          <li>
            <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({isActive}) => isActive ? 'active' : ''}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;