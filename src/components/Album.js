import { Container, Row } from 'react-bootstrap'
import AlbumCard from './AlbumCard'

const Album = () => {
  return (
    <div className='album py-5 bg-light'>
      <Container>
        <Row>
          <AlbumCard />
        </Row>
      </Container>
    </div>
  )
}

export default Album
