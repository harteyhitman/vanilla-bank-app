import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button onClick={toggleNavbar}>Toggle Navbar</button>
      {isOpen && (
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      )}
    </nav>
  );
};

export default Hamburger;
