import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'google-maps-react';

function Markers({ locations, onClick }) {
  const markerElements = locations.map((location, index) => {
    return (
      <Marker key={index} id={index} position={{
        lat: location.latitude, 
        lng: location.longitude
      }}
      name={location.name}
      onClick={onClick}/>
    );
  });

  return (
    { markerElements }
  );
}

Markers.propTypes = {
  locations: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Markers;
