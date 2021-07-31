import React from "react";
import Logo from "../images/Logo.png";
import { Container, Row, Col } from "reactstrap";

const Logo = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md="12" className="text-center">
                    <h1>Crypto Price</h1>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Logo;