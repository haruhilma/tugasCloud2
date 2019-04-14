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
                    <Col xs lg="5">
                        <div className="photoWrapper">
                            <img src={require('/assets/img/me.jpg')}  />
                        </div>
                    </Col>
                    <Col xs lg="7">
                        <div className="infoContent">
                            <div className="midleBox">
                                <div className="midleHelper">
                                    <Row>
                                        <Col xs lg="3">
                                            Nama
                                        </Col>
                                        <Col xs lg="9">
                                            : Faris Eko Nurcahyo
                                        </Col>
                                        <Col xs lg="3">
                                            NIM
                                        </Col>
                                        <Col xs lg="9">
                                            : 1614321021
                                        </Col>
                                        <Col xs lg="3">
                                            Jurusan
                                        </Col>
                                        <Col xs lg="9">
                                            : Teknik Informatika
                                        </Col>
                                        <Col xs lg="3">
                                            Angkatan
                                        </Col>
                                        <Col xs lg="9">
                                            : 2016
                                        </Col>
                                        <Col xs lg="3">
                                            Tanggal Lahir
                                        </Col>
                                        <Col xs lg="6">
                                            : 19 September 1989
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}
 
export default Header;