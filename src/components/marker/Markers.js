import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'google-maps-react';

function Markers({ pins, onClick, ...props }) {
  const markerElements = pins.map((pin, i) => {
    return (
      <Marker {...props} key={i} id={pin._id} position={{
        lat: pin.lat, 
        lng: pin.lng
      }}
      name={pin.where}
      onClick={onClick}/>
    );
  });
  
  return (
    <section>
      {markerElements}
    </section>
  );
}

Markers.propTypes = {
  pins: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Markers;
