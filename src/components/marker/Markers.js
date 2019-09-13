import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'google-maps-react';

function Markers({ locations, onClick, ...props }) {
  const markerElements = locations.map((location, i) => {
    return (
      <Marker {...props} key={i} id={i} position={{
        lat: location.latitude, 
        lng: location.longitude
      }}
      name={location.name}
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
  locations: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Markers;
