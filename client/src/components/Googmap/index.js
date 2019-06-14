import React, {Component} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

require('dotenv').config();

const style ={
    width: "100%",
    height: "90%"
};

class Googmap extends Component {

    render(props) {
        return (
            <div>
                <Map google={this.props.google}
                     zoom={16}
                     style={style}
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