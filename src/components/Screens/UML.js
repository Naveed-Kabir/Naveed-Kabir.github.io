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
            The Design Class Diagram illustrates the core components of WanderSync and their relationships. Key classes include AccountModel, which manages account creation and authentication with attributes like username and password and methods such as login(). The UserDatabaseModel class oversees travel details, including destinations, accommodations, dining, and transportation, with methods like addDestination(). The LogisticsViewModel class is responsible for calculating and determining all of the logistics for a user’s trip, including attributes like destinations, allotted days, and planned days. Relationships in the diagram show that users create communities, and itineraries depend on database interactions to fetch and store data.
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
            In this project, the UserDatabaseModel class implements the Singleton design pattern. The Singleton pattern ensures that only one instance of a class is created and provides a global point of access to that instance. In the UserDatabaseModel class, this pattern is achieved through the private static instance variable, which holds the single instance of the class. The constructor is private, preventing other classes from directly instantiating UserDatabaseModel. Instead, the getInstance() method, marked as synchronized for thread safety, checks if an instance already exists. If it doesn’t, it creates a new UserDatabaseModel; otherwise, it returns the existing instance. This approach is particularly useful here, as it ensures only one connection is made to the Firebase database for user-related operations, optimizing resource usage and maintaining consistency across database interactions in the application.
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
            Our team chose to implement the Strategy pattern for dining reservations. We implemented the pattern by creating an interface (DiningStrategy) with the showDining() method which displays different dining reservations depending on the concrete strategy (ExpiredStrategy displays reservations that are old, UpcomingStrategy displays reservations in the future, and ShowAllStrategy displays all reservations). This enhances functionality and improves our app’s usability by allowing users to filter reservations based on the date. This is helpful for quickly viewing reservations that are approaching, and for quickly reviewing past reservations that the user has had.
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