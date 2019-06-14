import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
let buttonStyle= {
    width: '200px'
}

// let divStyle = {
//     width: '200px',
//     alignItems: 'right'
// }


const ButtonList = (props) => {
    const streetButtons = props.streets.map(({ id, name, lat, lng }) => {
        return (
            <div key={id}><button className="ui blue button" data-lat={lat} data-lng={lng} onClick={props.onClick} style={buttonStyle}>{name}</button><br /></div>
        );
    });
    return (
        
            <Row>
                <Col>
                    <div className='text-right'>{streetButtons}</div>
                </Col>
            </Row>
        
    );
};


export default ButtonList;