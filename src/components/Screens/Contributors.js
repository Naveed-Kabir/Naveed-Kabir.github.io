import { Container, Row, Col } from 'react-bootstrap';

const Contributors = () => (
  <section className="py-5" id="contributors">
    <Container>
      <h2 className="text-center">Contributors</h2>
      <Row>
        <Col md={4}>
          <h4>Molly Butler</h4>
          <p>Role: Frontend, screen development, Android development</p>
        </Col>
        <Col md={4}>
          <h4>Ethan Fong</h4>
          <p>Role: Frontend, screen development, Android development</p>
        </Col>
        <Col md={4}>
          <h4>Naveed Kabir</h4>
          <p>Role: Frontend, screen development, Android development</p>
        </Col>
        <Col md={4}>
          <h4>Alexander Moreland</h4>
          <p>Role: Frontend, screen development, Android development</p>
        </Col>
        <Col md={4}>
          <h4>Karsten Richardson</h4>
          <p>Role: Frontend, screen development, Android development</p>
        </Col>
        <Col md={4}>
          <h4>Ben Ward</h4>
          <p>Role: Frontend, screen development, Android development</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contributors;
