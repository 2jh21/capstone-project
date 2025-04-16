// src/components/Header.js

import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn">☰</button>
      </div>

      <div className="header-center">
        <Link to="/" className="logo">RePet</Link>
      </div>

      <div className="header-right">
        <Link to="/login" className="login">
          <span className="icon">👤</span> 
          <span className="label">로그인</span>
        </Link>
        <button className="alarm-btn">
          <span className="icon">🔔</span> 
          <span className="label">알림</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
