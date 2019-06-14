import React from 'react';
import axios from 'axios';


class PushForm extends React.Component {
    state = {
        name: '',
        lat: '',
        lng: ''

    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const { name, lat, lng } = this.state;
        console.log(event.target);
        let data = new FormData(event.target);
        console.log(data);
        axios.post("/api/streets", { name, lat, lng }).then(this.props.forceRefresh());
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { name, lat, lng } = this.state;
        return (

            <div className="ui inverted segment" style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={this.onFormSubmit}>
                    <div className="three fields">
                        <div className="field">
                            Street Name:<br />
                            <input type="text" name="name" placeholder="street name" value={name} onChange={this.onChange} /><br />
                        </div>
                        <div className="field">
                            latitude:<br />
                            <input type="text" name="lat" placeholder="latitude" value={lat} onChange={this.onChange} /><br />
                        </div>
                        <div className="field">
                            longitude:<br />
                            <input type="text" name="lng" placeholder="longitude" value={lng} onChange={this.onChange} /><br />
                        </div>
                    </div>
                    <button className="ui inverted blue button fluid">Submit </button>
                </form>
            </div>

        );
    }
}
export default PushForm;