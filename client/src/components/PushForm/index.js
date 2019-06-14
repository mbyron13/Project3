import React from 'react';
import axios from 'axios';



class PushForm extends React.Component {
    state = {
        name: '',
        lat: '',
        lng:''

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { name, lat, lng } = this.state;
        console.log(event.target);
        let data = new FormData(event.target);
        console.log(data);
        axios.post("http://localhost:3001/api/streets", { name, lat, lng } ).then(this.props.forceRefresh());
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    render() {
        const { name, lat, lng } = this.state;
       return (
            <form onSubmit={this.onFormSubmit}>
                Street Name:<br />
                <input type="text" name="name" value={name} onChange={this.onChange}/><br />
                latitude:<br />
                <input type="text" name="lat" value={lat} onChange={this.onChange}/><br />
                longitude:<br />
                <input type="text" name="lng" value={lng} onChange={this.onChange}/><br />
                <button>Submit </button>
            </form>
        );
    }
}
export default PushForm;