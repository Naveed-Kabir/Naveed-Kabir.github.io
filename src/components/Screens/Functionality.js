import { Container } from 'react-bootstrap';

const Functionality = () => (
  <section className="py-5" id="functionality">
    <Container>
      <h2 className="text-center">Functionality</h2>
      <p>
        Watch the video demo below to explore WanderSync's features and user interface in action.
      </p>
      <div className="text-center">
        <a
          href="https://youtu.be/95rdSeEbMOc"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Demo
        </a>
      </div>
    </Container>
  </section>
);

export default Functionality;
