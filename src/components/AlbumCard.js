import dummyData from '../data/dummyData'
import { Col, Card, ButtonGroup, Button } from 'react-bootstrap'

const AlbumCard = () => {
  return (
    <>
      {dummyData.map((items) => {
        return (
          <Col md={4} key={items.id}>
            <Card className='mb-4 shadow-sm'>
              <svg
                className='bd-placeholder-img card-img-top'
                width='100%'
                height='225'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid slice'
                focusable='false'
                role='img'
                aria-label='Placeholder: Thumbnail'
              >
                <title>{items.title}</title>
                <rect width='100%' height='100%' fill='#55595c' />
                <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
                  {items.title}
                </text>
              </svg>
              <Card.Body>
                <Card.Text>{items.text}</Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                  <ButtonGroup aria-label='Basic example'>
                    <Button variant='btn-outline-secondary'>View</Button>
                    <Button variant='btn-outline-secondary'>Edit</Button>
                  </ButtonGroup>
                  <small className='text-muted'>{items.editTime} mins</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </>
  )
}

export default AlbumCard
