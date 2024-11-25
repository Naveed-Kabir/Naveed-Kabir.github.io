import React, {useState} from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import './UML.css';
import img1 from '../../assets/diagrams/img1.png';
import img2 from '../../assets/diagrams/img2.png';
import img3 from '../../assets/diagrams/img3.png';
import img4 from '../../assets/diagrams/img4.png';
import singleton from '../../assets/diagrams/singleton.png';
import strategy from '../../assets/diagrams/strategy.png';

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
            <p className="mt-3">
            Our Domain Class Diagram (DCD) for the WanderSync project was made to provide a clear representation of the key objects and their relationships within the application. This diagram acts as a blueprint for our app's design, detailing how data is structured and how different components interact. 
            Our DCD inclues classes such as UserDestinationView, AccommodationViewModel, DiningEstablishment, and LoginModel. These classes are designed to encapsulate specific functionalities and strucutres in order to work together.

           The domain class diagram also aids in identifying dependencies, streamlining the development process, and facilitating communication among team members. It serves as a reference point for developers and stakeholders to align on the application's scope and ensure all requirements are met effectively.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={img2} alt="UI Screen 2" fluid 
                onClick={() => handleImageClick(img2)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">MVVM Architecture: File Structure Overview</p>
            <p>
            We utilizied the Model-View-ViewModel (MVVM) architecture model as a key part of the WanderSync project, ensuring a clean separation of concerns. The architecture organizes the codebase into three primary layers: Model, View, and ViewModel, each addressing specific responsibilities.
            <br></br>

Model: This layer handles the application's data and business logic, such as database interactions and domain-specific models. For example, classes like AccommodationsModel and DiningModel represent core data structures, while AccommodationsDatabaseModel encapsulates database access logic.
    <br></br>
View: The view layer is responsible for the user interface, containing activities and adapters that render data and handle user interactions. Examples include DestinationActivity for displaying destinations and DiningRecyclerViewAdapter for rendering dining options in a scrollable list.
    <br></br><br></br>
ViewModel: This layer acts as a mediator between the model and the view, managing the state and providing data in a format that the view can easily consume. For instance, LoginViewModel coordinates user authentication data, while DestinationViewModel manages the state and logic for displaying destination details.
            </p>
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
            <p>
              An example Sequence Diagram for the "Logging a Trip" use case in the WanderSync application illustrates the interaction between key components: DestinationViewModel, DestinationView, DestinationModel, and UserDatabase. The process begins with the user inputting trip details through the DestinationView, which triggers a call to the DestinationViewModel. The DestinationViewModel acts as the intermediary, validating the input and coordinating between the view and data layers. It then interacts with the DestinationModel to update trip-related data, such as destination details, dates, and activities. Finally, the UserDatabase is accessed by the DestinationModel to associate the logged trip with the user’s account, ensuring persistence. This interaction flow emphasizes the clear separation of concerns enabled by the MVVM architecture, allowing for a streamlined, maintainable, and scalable approach to user-driven functionality.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={img4} alt="UI Screen 4" fluid 
                onClick={() => handleImageClick(img4)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">Sequence Diagram: Adding an Accommodation Use Case</p>
            <p>
              An example Sequence Diagram for the "Adding Accommodation" use case demonstrates the interaction flow between the AccommodationsView, AccommodationsViewModel, AccommodationsModel, and the UserDatabase. The process begins with the user initiating the action in the AccommodationsView, such as selecting or inputting accommodation details. The AccommodationsView communicates this data to the AccommodationsViewModel, which acts as the intermediary, ensuring the data is properly formatted and validated. The AccommodationsViewModel then relays the information to the AccommodationsModel, which processes the logic for adding the accommodation to the trip. Finally, the AccommodationsModel updates the UserDatabase, ensuring the accommodation details are stored persistently. 
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={singleton} alt="UI Screen 3" fluid 
                onClick={() => handleImageClick(singleton)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">Sinlgeton Pattern: UserDatabaseModel</p>
            <p>
              The UserDatabaseModel class implements the Singleton design pattern to ensure that only one instance of the class is created and accessed throughout the application. This is particularly important in scenarios where multiple parts of the application need consistent access to the same user-specific Firebase database reference. The private constructor prevents external instantiation, while a thread-safe getInstance() method provides global access to the single instance. This pattern not only saves memory but also avoids the risk of creating multiple, conflicting instances of the database connection. By centralizing the database reference management, the UserDatabaseModel streamlines operations like fetching or updating user data while maintaining a clean architecture.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="uml-image-box">
              <Image src={strategy} alt="UI Screen 4" fluid 
                onClick={() => handleImageClick(strategy)}
                className="clickable-image"/>
            </div>
            <p className="mt-3">Strategy Pattern: DiningViewModel</p>
            <p>
            The Strategy design pattern is implemented in the ShowAllStrategy class to define a flexible way to display dining reservations based on different strategies. As a part of the DiningStrategy interface, ShowAllStrategy encapsulates the logic to show all dining plans, including expired ones. This approach allows the DiningActivity to dynamically select and apply various strategies for filtering or displaying dining data without altering the underlying logic in the DiningViewModel. By separating the strategy logic from the core activity and model logic, the code adheres to the Open-Closed Principle, enabling easier maintenance and the addition of new strategies. For instance, the ShowAllStrategy retrieves all reservations via the DiningViewModel, adds them to a visible list, and returns them for display, ensuring clear and reusable functionality.
            </p>
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