import { Container } from 'react-bootstrap';

const Introduction = () => (
  <section className="py-5 bg-light" id="introduction">
    <Container>
      <h2 className="text-center">Introduction</h2>
      <p>
      WanderSync is an app that helps you plan and manage your travels,  
      The app lets you create an itinerary that includes 
      all the details of your trip, from places you want to visit to restaurants you want to try and 
      hotels you want to stay in. You can also collaborate with others on the same trip in real-time, 
      so everyone is on the same page. <br />

      Wandersync has 9 main screens: Welcome, Login, Account Creation, Logistics, Destination, Dining Establishment, 
      Accommodation, Transportation, and Travel Community. Starting from the welcome screen, users can log in or create an account.
        Once logged in, users can create a new trip or view their existing trips. Users can add details to their trip such as
        the destination, logistics, dining establishments, accommodations, and transportation. Users can also collaborate with 
        other users on their trip plans, view other users' travel posts, and share their own travel experiences. 

      </p>
    </Container>
  </section>
);

export default Introduction;
