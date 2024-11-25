import { Container, Row, Col, Image } from 'react-bootstrap';

const UIScreen = () => (
  <section className="py-5" id="ui">
    <Container>
      <h2 className="text-center">User Interface</h2>
      <Row>
        {/* Replace with your screenshots */}
        <Col md={6}>
          <Image src="./assets/screenshots/ui1.png" alt="UI Screen 1" fluid />
        </Col>
        <Col md={6}>
          <Image src="./assets/screenshots/ui2.png" alt="UI Screen 2" fluid />
        </Col>
      </Row>
    </Container>
  </section>
);

export default UIScreen;
