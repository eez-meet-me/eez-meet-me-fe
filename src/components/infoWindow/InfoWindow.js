import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'google-maps-react';

function InformationWindow({ marker, visible, onClose, pins, ...props }) {
  const pin = pins.map((pin) => {
    if(pin.id === marker.id) {
      return pin;
    }
  });
  // console.log(pins, 'pins');
  // console.log(pin, 'single pin');
  console.log(marker, 'marker');
  return (
    <InfoWindow
      {...props}
      marker={marker}
      visible={visible}
      onClose={onClose}
    >
      <section>
        <h3>{pin.where}</h3>
        <p>{pin.address}</p>
        <p>{pin.startTime} - {pin.endTime}</p>
      </section>
    </InfoWindow>
  );
}

InformationWindow.propTypes = {
  marker: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pins: PropTypes.array.isRequired
};

export default InformationWindow;
