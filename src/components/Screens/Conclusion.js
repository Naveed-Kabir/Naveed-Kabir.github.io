import { Container } from 'react-bootstrap';

const Conclusion = () => (
  <section className="py-5 bg-light" id="conclusion">
    <Container>
      <h2 className="text-center">Conclusions & Reflections</h2>
      <p>
      During the development of the WanderSync app, our team gained invaluable experience working with modern technologies and architectural patterns. For example, we implemented the MVVM (Model-View-ViewModel) architecture, which allowed us to cleanly separate the app’s logic from the UI, making our codebase more maintainable and scalable. For instance, using ViewModels helped us efficiently manage data flow between the user interface and models, especially in key features like logging trips and managing accommodations. Additionally, we used many design pattern such as the Singleton pattern for classes such as the UserDatabaseModel, ensuring a single instance controlled data access throughout the app. These design patterns taught us how to create robust and reusable code, a critical skill for software development.
We also delved into other patterns such as the Strategy pattern to make our app more dynamic and adaptable to user needs. For example, in the dining feature, we used different strategies to filter and display dining plans based on user preferences, such as showing all options or expired reservations. Implementing such patterns required us to deeply understand their principles and adapt them to real-world scenarios. Moreover, the use of tools like Firebase for database management and React for the frontend website challenged us to integrate modern technologies efficiently. This combination of design principles and technical tools expanded our expertise and gave us a practical perspective on software engineering.
During the project, we faced several challenges as a team, particularly in organizing tasks and ensuring smooth communication. Coordinating work across different modules, such as the user interface, backend models, and database integration, often led to misunderstandings about responsibilities and dependencies. For example, integrating the database with the ViewModels required precise alignment between team members handling the front-end and those working on backend logic, which sometimes caused delays. Additionally, balancing individual workloads with team deadlines was difficult, as some members were more familiar with certain technologies than others, creating uneven progress. Despite these difficulties, we learned to leverage tools like Git for version control and communication platforms to keep everyone aligned. These experiences taught us the importance of clear task delegation, active collaboration, and supporting each other to overcome technical and organizational hurdles.
Different team members contributed in different ways. For example, Ethan and Ben worked hard on making diagrams, Naveed and Karsten worked hard on the Android screens, and Molly and Lex worked on the writing. Although these were these members’ focuses, each member contributed to each part of the project in different ways. 
Ultimately, building WanderSync was not just a technical achievement but also a testament to the value of teamwork and perseverance. We learned how to collaborate effectively, address conflicts, and adapt to challenges together, whether it was debugging complex logic or finalizing design decisions. While the process often tested our patience and problem-solving abilities, the app we created is something we are immensely proud of. WanderSync is not only a reflection of our technical learning but also of the hard work and dedication we invested as a team.

      </p>
    </Container>
  </section>
);

export default Conclusion;
