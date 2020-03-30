import React from 'react';
import ReactDOM from 'react-dom';

const PortalModal = props => {
  const styles = {
    width: '380px',
    height: '100px',
    position: 'absolute',
    top: '108.7em',
    left: '20em',
    background: 'red',
    opacity: '0.65',
    color: '#FFF'
  };

  if (!props.visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={styles}>{props.children}</div>,
    document.getElementById('modal-portal')
  );
};

export default PortalModal;
