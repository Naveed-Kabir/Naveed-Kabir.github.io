import { Container, Row, Col, Image } from 'react-bootstrap';
import './UI.css'
import welcome from '../../assets/screen_screenshots/welcome.png';
import createAccount from '../../assets/screen_screenshots/createAccount.png';
import login from '../../assets/screen_screenshots/login.png';
import logistics from '../../assets/screen_screenshots/logistics.png';
import destinations from '../../assets/screen_screenshots/destinations.png';
import accommodations from '../../assets/screen_screenshots/accommodations.png';
import dining from '../../assets/screen_screenshots/dining.png';
import travel from '../../assets/screen_screenshots/travel.png';

const UIScreen = () => (
  <section className="py-5 bg-light" id="ui">
    <Container>
      <h2 className="text-center mb-5">User Interface</h2>
      <Row className="g-4"> {/* Gap between rows */}
        <Col md={4} className="text-center">
          <div className="ui-image-box">
            <Image className="transform-hover scale-105" src={welcome} alt="UI Screen 1" fluid />
          </div>
          <p className="mt-3">Welcome Screen</p>
        </Col>
        <Col md={4} className="text-center">
          <div className="ui-image-box">
            <Image src={createAccount} alt="UI Screen 2" fluid />
          </div>
          <p className="mt-3">Create Account Screen</p>
        </Col>
        <Col md={4} className="text-center">
          <div className="ui-image-box">
            <Image src={login} alt="UI Screen 2" fluid />
          </div>
          <p className="mt-3">Login Screen</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4} className="text-center">
          <div className="ui-image-box">
            <Image src={logistics} alt="UI Screen 3" fluid />
          </div>
          <p className="mt-3">Logistics screen</p>
        </Col>
        <Col md={4} className="text-center">
          <div className="ui-image-box">
            <Image src={dining} alt="UI Screen 4" fluid />
          </div>
          <p className="mt-3">Dining Screen</p>
        </Col>
        <Col md={4} className="text-center">
          <div className="ui-image-box">
            <Image src={accommodations} alt="UI Screen 4" fluid />
          </div>
          <p className="mt-3">Accommodations Screen</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6} className="text-center">
          <div className="ui-image-box">
            <Image src={destinations} alt="UI Screen 3" fluid />
          </div>
          <p className="mt-3">Destination screen</p>
        </Col>
        <Col md={6} className="text-center">
          <div className="ui-image-box">
            <Image src={travel} alt="UI Screen 4" fluid />
          </div>
          <p className="mt-3">Travel Screen</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default UIScreen;
