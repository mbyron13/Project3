import React from 'react';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import Container from 'react-bootstrap/Container';
//import Jumbotron from 'react-bootstrap/Jumbotron';


const ButtonList = (props) => {
    const streetButtons = props.streets.map(({id, name, lat, lng}) => {
        return (
            <div key={id}><button data-lat={lat} data-lng={lng} onClick={props.onClick}>{id} {name} {lat} {lng}</button><br/></div>
        );
    });
    return(
        <div>{streetButtons}</div>
    );
};


export default ButtonList;