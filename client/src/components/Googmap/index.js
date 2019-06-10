import React, {Component} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

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
                     zoom={13}
                     style={style}
                     justify="center"
                     initialCenter={this.props.center}
                     center={this.props.center}>
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