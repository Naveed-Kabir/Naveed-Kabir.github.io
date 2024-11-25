import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Album = () => {
  const screens = [
    { id: 1, title: 'Introduction', link: '/introduction', description: 'Learn about WanderSync.' },
    { id: 2, title: 'UI Design', link: '/ui', description: 'Explore app UI.' },
    { id: 3, title: 'UML Diagrams', link: '/uml', description: 'View UML diagrams.' },
    { id: 4, title: 'Functionality', link: '/functionality', description: 'See app functionality.' },
    { id: 5, title: 'Conclusion', link: '/conclusion', description: 'Read our reflections.' },
    { id: 6, title: 'Contributors', link: '/contributors', description: 'View contributors.' },
  ];

  return (
    <section className="album py-5 bg-light">
      <Container>
        <Row>
          {screens.map((screen) => (
            <Col md={4} key={screen.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>{screen.title}</Card.Title>
                  <Card.Text>{screen.description}</Card.Text>
                  <Link to={screen.link}>
                    <Button variant="primary">Go to {screen.title}</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Album;
