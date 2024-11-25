import React, {useState} from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import './UML.css';
import img1 from '../../assets/diagrams/img1.png';
import img2 from '../../assets/diagrams/img2.png';
import img3 from '../../assets/diagrams/img3.png';
import img4 from '../../assets/diagrams/img4.png';

const UMLScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  return (
    <section className="py-5 bg-light" id="uml">
      <Container>
        <h2 className="text-center mb-5">Architecture Diagrams</h2>
        <Row className="g-4"> {/* Gap between rows */}
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={img1} alt="UI Screen 1" fluid 
                onClick={() => handleImageClick(img1)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">Domain Class Diagram: WanderSync</p>
          </Col>
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={img2} alt="UI Screen 2" fluid 
                onClick={() => handleImageClick(img2)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">MVVM Architecture: File Structure Overview</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={img3} alt="UI Screen 3" fluid 
                onClick={() => handleImageClick(img3)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">Sequence Diagram: Logging a Trip Use Case</p>
          </Col>
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={img4} alt="UI Screen 4" fluid 
                onClick={() => handleImageClick(img4)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">Sequence Diagram: Adding an Accommodation Use Case</p>
          </Col>
        </Row>
      </Container>
 
      {/*Modal for FS image*/}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        className="fullscreen-modal"
      >
        <Modal.Body>
          {currentImage && <Image src={currentImage} alt="Fullscreen Diagram" fluid />}
        </Modal.Body>
      </Modal>

    </section>
  );
};

export default UMLScreen;
