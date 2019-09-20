import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Markers from '../marker/Markers';
import InformationWindow from '../infoWindow/InfoWindow';
import { getPinsList } from '../../selectors/pinSelectors';
import { getPins } from '../../actions/pinActions';
import Header from '../header/Header';
import MarkerList from '../markerList/MarkerList';

class GoogleMap extends Component {

  static propTypes = {
    google: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    pins: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
    setInterval(() => {
      this.props.fetch();
    }, 10000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeMarker !== this.state.activeMarker ||
      nextProps.pins.length !== this.props.pins.length ||
      !nextProps.pins.every((pin, i) => pin._id === this.props.pins[i]._id);
  }

  state = {
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

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      });
    }
  }

  render() {
    const { activeMarker, showingInfoWindow } = this.state;
    const { pins } = this.props;
    return (
      <>
      <Header />
        <Map
          google={this.props.google}
          zoom={8}
          style={{ width: '100%', height: '50%' }}
          initialCenter={{ lat: 45.5234166, lng: -122.6808846 }}
        >
          <Markers onClick={this.onMarkerClick} pins={pins} />
          <InformationWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={this.onClose}
            pins={pins} />
        </Map>
        <MarkerList pins={pins} />
      </>
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
