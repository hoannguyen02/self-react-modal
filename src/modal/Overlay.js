import React from 'react';
import './Overlay.css';

const Overlay = (props) => {
  const { title, onClose, children, footer, open, onSubmit } = props;
  const handleSubmit = (event) => {
    onSubmit && onSubmit(event);
    event.preventDefault();
  };

  return (
    <div className={`modal__dialog ${open ? 'open' : ''}`}>
      <div className="modal__content">
        <div className="modal__header">
          {title && <h5 className="modal__title">{title}</h5>}
          <button
            type="button"
            className="close"
            onClick={onClose ? onClose : () => {}}
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal__body">{children}</div>
          {footer && <div className="modal__footer">{footer}</div>}
        </form>
      </div>
    </div>
  );
};

export default Overlay;
