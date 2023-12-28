import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.scss';

const AppBar = () => {
  return (
    <header className="app-bar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {/* Add other navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
