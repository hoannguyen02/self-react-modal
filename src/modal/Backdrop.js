import React from 'react';
import './backdrop.css';

const Backdrop = ({ onClose, open }) => {
  return (
    <div
      className={`backdrop fade ${open ? 'open' : ''}`}
      onClick={onClose ? onClose : () => {}}
    ></div>
  );
};

export default Backdrop;
