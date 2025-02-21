import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header  className={`app__header drop-shadow-bottom ${darkMode ? 'light-mode--elements' : ''}`}>
      <div className="header__wrapper d-flex container">
        <p className="header__title" onClick={() => window.location.reload()}>
          Where in the World ?
        </p>
        <div className="header__mode" onClick={toggleDarkMode}>
          <span className="header__icon">
            <svg className={`svg--icon ${darkMode ? 'light-mode--icon' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </span>
          <span className="header__mode--text">{darkMode ? 'Light mode' : 'Dark mode'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
