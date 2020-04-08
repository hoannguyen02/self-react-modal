import React, { useState } from 'react';
import './App.css';
import TestModalWithForm from './test-modal-with-form';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <h2>Welcome to modal based on bootstrap for my company project</h2>
      <button onClick={handleOpenModal}>Open</button>
      <TestModalWithForm open={openModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
