// frontend/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
