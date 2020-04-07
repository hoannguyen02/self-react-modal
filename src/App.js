import React, { useState } from 'react';
import './App.css';
import Modal from './modal';

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
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        footer={<button onClick={handleCloseModal}>Close</button>}
      >
        There was some specs such as styles without flex, state full component
        with class
      </Modal>
    </div>
  );
}

export default App;
