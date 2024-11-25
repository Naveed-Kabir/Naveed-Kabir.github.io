import { Container, Row, Col, Image } from 'react-bootstrap';
import './UML.css';
import img1 from '../../assets/diagrams/img1.png';
import img2 from '../../assets/diagrams/img2.png';
import img3 from '../../assets/diagrams/img3.png';
import img4 from '../../assets/diagrams/img4.png';

const UMLScreen = () => (
  <section className="py-5 bg-light" id="uml">
    <Container>
      <h2 className="text-center mb-5">Architecture Diagrams</h2>
      <Row className="g-4"> {/* Gap between rows */}
        <Col md={6} className="text-center">
          <div className="uml-image-box">
            <Image src={img1} alt="UI Screen 1" fluid />
          </div>
          <p className="mt-3">Description of UI Screen 1</p>
        </Col>
        <Col md={6} className="text-center">
          <div className="uml-image-box">
            <Image src={img2} alt="UI Screen 2" fluid />
          </div>
          <p className="mt-3">Description of UI Screen 2</p>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6} className="text-center">
          <div className="uml-image-box">
            <Image src={img3} alt="UI Screen 3" fluid />
          </div>
          <p className="mt-3">Description of UI Screen 3</p>
        </Col>
        <Col md={6} className="text-center">
          <div className="uml-image-box">
            <Image src={img4} alt="UI Screen 4" fluid />
          </div>
          <p className="mt-3">Description of UI Screen 4</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default UMLScreen;
