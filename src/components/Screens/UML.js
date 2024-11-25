import { Container, Row, Col, Image } from 'react-bootstrap';

const UMLScreen = () => (
  <section className="py-5 bg-light" id="uml">
    <Container>
      <h2 className="text-center">UML Diagrams</h2>
      <Row>
        {/* Replace with your UML diagrams */}
        <Col md={6}>
          <Image src="./assets/screenshots/uml1.png" alt="UML Diagram 1" fluid />
        </Col>
        <Col md={6}>
          <Image src="./assets/screenshots/uml2.png" alt="UML Diagram 2" fluid />
        </Col>
      </Row>
    </Container>
  </section>
);

export default UMLScreen;
