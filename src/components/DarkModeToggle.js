import React, { useEffect, useState } from 'react';
import "../stylesheets/Navbar.css"; // Assuming you have styles here

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="switch-container">
      <input
        className="toggle-checkbox"
        id="toggle-switch"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="switch" htmlFor="toggle-switch">
        <div className="toggle">
          <div className="led"></div>
        </div>
      </label>
    </div>
  );
}
