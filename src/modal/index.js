import React from 'react';
import './modal.css';

const Modal = (props) => {
  const { footer, children, title, open, onClose } = props;
  return (
    <div className={`modal fade ${open ? 'show' : ''}`}>
      <div className="modal__dialog">
        <div className="modal__content">
          <div className="modal__header">
            {title && <h5 className="modal__title">{title}</h5>}
            <button type="button" className="close" onClick={onClose}>
              <span>×</span>
            </button>
          </div>
          <div className="modal__body">{children}</div>
          <div className="modal__footer">{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
