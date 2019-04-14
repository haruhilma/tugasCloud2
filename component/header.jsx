import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class Header extends Component {

    render() { 
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">Tugas Cloud Computing</Navbar.Brand>
                    </Container> 
                </Navbar>
                {this.container()}
            </React.Fragment> 
            
        );
        
    }

    container(){

        return(
            <Container className="idContainer" >
                <Row>
                    <Col xs lg="12">
                        <h1 className="text-center" >Identitas Diri</h1>
                    </Col>
                    <Col xs lg="6">
                        <div className="photoWrapper">
                            <img src={require('/assets/img/me.jpg')}  />
                        </div>
                    </Col>
                    <Col xs lg="6">
                        <div className="infoContent">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}
 
export default Header;