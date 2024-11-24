import { Container } from 'react-bootstrap'

import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import Album from './components/Album'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Menu />
      <main>
        <Container>
          <Header />
        </Container>

        <Container>
          <Album />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
