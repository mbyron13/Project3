import React, { Component } from "react";
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonList from '../ButtonList';
import Googmap from '../Googmap';
import PushForm from '../PushForm';

//import Nav from "../Nav";

class Wrapper extends Component {

    state = {
        streets: [],
        center: {
            lat: 42.3601,
            lng: -71.0589
        },
        count: 0,
        shouldUpdate: false
    };

    handleButtonClick = (event) => {
        console.log(`lat ${event.target.dataset.lat}, lng ${event.target.dataset.lng}`);
        this.setState({ center: { lat: event.target.dataset.lat, lng: event.target.dataset.lng } });
    };

    forceRefresh() {
        // let update = this.state.shouldUpdate;
        this.setState({ shouldUpdate: true });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.shouldUpdate === true) {
            axios.get("/api/streets", {
                headers: {
                    Authorization: '*'
                }
            }).then((response) => {
                this.setState({ streets: response.data, shouldUpdate: false });
            });
        }
    }

    componentDidMount() {
        axios.get("/api/streets", {
            headers: {
                Authorization: '*'
            }
        }).then((response) => {
            this.setState({ streets: response.data })
        });
    };

    render() {
        return (
            <Container style={{ height: "50%" }}>
                <Jumbotron className="justify-content-md-center">
                    <Row>
                        <Col>
                            <PushForm forceRefresh={this.forceRefresh.bind(this)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs sm md lg xl ="9">
                            <Googmap center={this.state.center} />
                        </Col>
                        <Col xs sm md lg xl ="3">
                            <ButtonList streets={this.state.streets} onClick={this.handleButtonClick} />
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}


export default Wrapper;