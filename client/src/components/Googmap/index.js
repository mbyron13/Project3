import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
require('dotenv').config();

const style ={
  width: "70%",
  height: "80%"

};

class Googmap extends Component {

  render(props) {
    return (
      <div style={{position: "relative", width: "1000px", height:"1000px"}}>

        <Map google={this.props.google} 
          zoom={14}
          style={style}
          justify="center"
          Center={{
            lat: 42.3601,
            lng: -71.0589}}
        >
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLESECRET)
})(Googmap)