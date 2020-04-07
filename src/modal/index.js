import React from 'react';
import Overlay from './Overlay';
import Backdrop from './Backdrop';

export default class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown, false);
  }

  handleKeydown = (e) => {
    const { onClose } = this.props;
    if (e.keyCode === 27) {
      onClose && onClose();
    }
  };

  render() {
    const { open, onClose } = this.props;
    return (
      <div className="modal">
        <Backdrop open={open} onClose={onClose} />
        <Overlay {...this.props} />
      </div>
    );
  }
}
