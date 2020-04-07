import React from 'react';
import './overlay.css';

const Overlay = (props) => {
  const { title, onClose, children, footer, open, onSubmit } = props;
  return (
    <div className={`modal__dialog ${open ? 'open' : ''}`}>
      <div className="modal__content">
        <div className="modal__header">
          {title && <h5 className="modal__title">{title}</h5>}
          <button type="button" className="close" onClick={onClose}>
            <span>×</span>
          </button>
        </div>
        <form
          onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}
        >
          <div className="modal__body">{children}</div>
          <div className="modal__footer">{footer}</div>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
