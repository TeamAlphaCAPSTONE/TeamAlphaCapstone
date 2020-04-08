import React, { Component } from 'react';
import { Map, Marker,InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};



export class MapContainer extends Component {


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: 43.639118,
         lng: -79.425194
        }}
      >
          <Marker onClick={()=>{
            window.location.href="https://www.google.com/maps/place/Dare+%26+Defy+Strategic+Consulting/@43.639173,-79.424894,15z/data=!4m5!3m4!1s0x0:0xbfec18a00e448e5c!8m2!3d43.639173!4d-79.424894"
          }}
          name={'Dare and Defy'}
        />
        <InfoWindow><div>
            <h4>Dare and Defy</h4>
          </div></InfoWindow>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJt2jpZ-01wFmJ4HY8iunnSJKH3aXD4qc'
})(MapContainer);