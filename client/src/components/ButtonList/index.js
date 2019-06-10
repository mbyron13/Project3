import React from 'react';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import Container from 'react-bootstrap/Container';
//import Jumbotron from 'react-bootstrap/Jumbotron';


const ButtonList = (props, {onClick}) => {
    const streetButtons = props.streets.map(({id, name, lat,lng}) => {
        return (
        <div key={id}><button datalat={lat} datalng={lng} onClick={onClick}>{id} {name} {lat} {lng}</button><br/></div>
            );
    });
    return(
        <div>{streetButtons}</div>
    );
}


export default ButtonList;