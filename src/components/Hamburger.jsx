import React, { useState } from 'react';

const Hamburger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="app-btn">
      <header>
        <div className="navbar-mobile">
          <div className="hamburger" onClick={handleMenuClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="modal">
         
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <ul className='hamburger-list'>
          <a onClick={handleCloseModal} href="#home"><li style={{ color: 'white' }}>Home</li></a>
          <a onClick={handleCloseModal} href="#about"> <li>About Us</li></a>
          <a onClick={handleCloseModal} href="#features"><li>Features</li></a>
          <a onClick={handleCloseModal} href="#solution"><li>Solution</li></a>
        </ul>
          </div>
      
      )}
    </nav>
  );
};

export default Hamburger;
