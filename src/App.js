import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import Album from './components/Album';
import Introduction from './components/Screens/Introduction';
import UIScreen from './components/Screens/UI';
import UMLScreen from './components/Screens/UML';
import Functionality from './components/Screens/Functionality';
import Conclusion from './components/Screens/Conclusion';
import Contributors from './components/Screens/Contributors';

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Header />
        </Container>
        <Routes>
          <Route path="/" element={<Album />} />
          {/* Other Screens */}
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/ui" element={<UIScreen />} />
          <Route path="/uml" element={<UMLScreen />} />
          <Route path="/functionality" element={<Functionality />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
