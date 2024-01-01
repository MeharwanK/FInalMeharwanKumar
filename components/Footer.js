import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return(

    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h5>Column 1</h5>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Column 2</h5>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Column 3</h5>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Column 4</h5>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
        </Row>

        <div className={"bg-dark p-4 text-white d-flex align-items-center justify-content-center"}>
            copyrights @{new Date().getFullYear()} by Fahad's Creations
        </div>
        </Container>
    </footer>
  );
};

export default Footer;
