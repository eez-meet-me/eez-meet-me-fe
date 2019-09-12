import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Markers from '../marker/Markers';

class GoogleMap extends Component {

  static propTypes = {
    google: PropTypes.object.isRequired
  }

  state = {
    locations: [{ latitude: 47.49855629475769, longitude: -122.14184416996333, name: 'some name' },
      { latitude: 47.359423, longitude: -122.021071, name: 'some name' },
      { latitude: 47.2052192687988, longitude: -121.988426208496, name: 'some name' },
      { latitude: 47.6307081, longitude: -122.1434325, name: 'some name' },
      { latitude: 47.3084488, longitude: -122.2140121, name: 'some name' },
      { latitude: 47.5524695, longitude: -122.0425407, name: 'some name' }],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  // onClose = () => {

  // }

  render() {
    const { locations } = this.state;

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={{ width: '100%', height: '100%' }}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Markers onClick={this.onMarkerClick} locations={locations} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(GoogleMap);
