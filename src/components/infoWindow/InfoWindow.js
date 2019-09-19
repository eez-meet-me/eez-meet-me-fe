import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'google-maps-react';

function InformationWindow({ marker, visible, onClose, pins, ...props }) {
  const pin = pins.find((pin) => {
    if(pin._id === marker.id) {
      return pin;
    }
  }) || {};
  return (
    <InfoWindow
      {...props}
      marker={marker}
      visible={visible}
      onClose={onClose}
    >
      <section>
        <h4>Where: {pin.where}</h4>
        <h4>Address: {pin.address}</h4>
        <h4>Start Time: {pin.startTime} - End Time: {pin.endTime}</h4>
        <h4>Message: {pin.message}</h4>
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
