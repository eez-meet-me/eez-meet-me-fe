import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Markers from '../marker/Markers';
import InformationWindow from '../infoWindow/InfoWindow';
import { getPinsList } from '../../selectors/pinSelectors';
import { getPins } from '../../actions/pinActions';
import Play from '../play/Play';

class GoogleMap extends Component {

  static propTypes = {
    google: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    pins: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const { activeMarker, showingInfoWindow } = this.state;
    const { pins } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={{ width: '100%', height: '100%' }}
        initialCenter={{ lat: 45.5234166, lng: -122.6808846 }}
      >
        <Play />
        <Markers onClick={this.onMarkerClick} pins={pins} />
        <InformationWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={this.onClose}
          pins={pins} />
      </Map>
    );
  }
}

const mapStateToProps = state => ({
  pins: getPinsList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getPins());
  }
});

const ConnectedGoogleMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap);

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(ConnectedGoogleMap);
