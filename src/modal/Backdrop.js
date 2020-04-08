import React from 'react';
import './Backdrop.css';

const Backdrop = ({ onClose, open }) => {
  return (
    <div
      className={`backdrop fade ${open ? 'open' : ''}`}
      onClick={onClose ? onClose : () => {}}
    ></div>
  );
};

export default Backdrop;
