import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'google-maps-react';

function InformationWindow({ marker, visible, onClose, pin, ...props }) {
  return (
    <InfoWindow
      {...props}
      marker={marker}
      visible={visible}
      onClose={onClose}
    >
      <section>
        <h3>{pin.title}</h3>
        <p>{pin.location}</p>
        <p>{pin.time}</p>
      </section>
    </InfoWindow>
  );
}

InformationWindow.propTypes = {
  marker: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pin: PropTypes.object.isRequired
};

export default InformationWindow;
