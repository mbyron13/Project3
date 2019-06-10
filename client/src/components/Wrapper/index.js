import React, {Component} from "react";
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonList from '../ButtonList';
import Googmap from '../Googmap';

//import Nav from "../Nav";

class Wrapper extends Component {

    state = {
        streets: [],
        center: {
            lat: 42.3601,
            lng: -71.0589
        }
    };

    handleButtonClick = (event) => {
        console.log(`lat ${event.target.dataset.lat}, lng ${event.target.dataset.lng}`);
        this.setState({center: {lat: event.target.dataset.lat, lng: event.target.dataset.lng}});
    };

    componentDidMount() {
        axios.get("http://localhost:3001/api/streets", {
            headers: {
                Authorization: '*'
            }
        }).then((response)=> {
            console.log(response);
            this.setState({streets: response.data})
        });
    };

    render() {
        return (
            <Container style={{ height: "50%" }}>
                <Jumbotron>
                    <Row>
                        <Col>
                            <Googmap center={this.state.center}/>
                        </Col>
                        <Col>
                            <ButtonList streets={this.state.streets} onClick={this.handleButtonClick}/>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}


export default Wrapper;