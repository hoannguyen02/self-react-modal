import React from 'react';
import Modal from '../modal';

export default class TestModalWithForm extends React.Component {
  state = {
    email: '',
  };

  render() {
    const { open, onClose } = this.props;
    const { email } = this.state;

    const handleSubmit = () => {
      console.log(this.state.email);
      email && this.setState({ email: '' });
      onClose && onClose();
    };

    const handleEmailChange = (event) => {
      const { value } = event.target;
      this.setState({ email: value });
    };

    const handleClose = () => {
      email && this.setState({ email: '' });
      onClose && onClose();
    };

    return (
      <Modal open={open} onClose={handleClose} onSubmit={handleSubmit}>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <p>
          There was some specs such as styles without flex, state full component
          with class
        </p>
        <div>
          <input type="email" value={email} onChange={handleEmailChange} />
          <button type="submit">Submit</button>
        </div>
      </Modal>
    );
  }
}
