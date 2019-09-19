import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'google-maps-react';
import { useAuth0 } from '../../Auth0Provider';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';

function InformationWindow({ marker, visible, onClose, pins, ...props }) {
  const { user } = useAuth0();
  const sub = user.sub;
  console.log(DeleteButtonContainer);

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
        <h3>{pin.where}</h3>
        <p>{pin.address}</p>
        <p>{pin.startTime} - {pin.endTime}</p>
        <p>{pin.message}</p>
      </section>
      <DeleteButtonContainer pin={pin} sub={sub}/>
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
