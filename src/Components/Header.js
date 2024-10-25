import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // פונקציה לסגירת התפריט לאחר לחיצה על קישור
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // הקוד הזה יבטל את החלפת הצבעים באופן אוטומטי לפי הגדרות המכשיר
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark'); // הורדת התמיכה במצב כהה אוטומטי
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 flex justify-between items-center z-50" style={{ minHeight: '60px' }}>
      {/* כפתור המבורגר למובייל */}
      <button
        className="text-white lg:hidden fixed left-4 top-4 z-50"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* תפריט ניווט */}
      <ul
        className={`flex-col lg:flex-row lg:space-x-4 lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:items-center space-y-4 lg:space-y-0 fixed left-0 top-14 bg-gray-900 p-4 lg:static lg:bg-transparent lg:flex z-40`}
        style={{ height: 'auto', minHeight: '60px' }} /* תיקון הגובה כך שהתפריט לא יתפוס את כל המסך */
      >
        <li><a href="#home" className="text-white hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="text-white hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" className="text-white hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Projects</a></li>
        <li><a href="#technologies" className="text-white hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Technologies</a></li>
        <li><a href="#contact" className="text-white hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* אייקונים של LinkedIn ו-GitHub */}
      <div className="flex space-x-4 fixed right-4 top-4 z-50">
        <a href="https://www.linkedin.com/in/yossi-shem-tov/" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-gray-700 p-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.866-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.879v1.367h.041c.401-.761 1.379-1.563 2.839-1.563 3.036 0 3.594 1.996 3.594 4.591v5.605z" />
          </svg>
        </a>
        <a href="https://github.com/yossishemtov" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-gray-700 p-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.086-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.005-.403 1.022.005 2.048.137 3.006.403 2.292-1.552 3.299-1.23 3.299-1.23.653 1.649.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.201-6.084 8.201-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Header;
