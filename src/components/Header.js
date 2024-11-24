import { Container, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <section className='jumbotron text-center'>
      <Container>
        <h1 className='text-capitalize'>WanderSync Group 14</h1>
        <p className='lead text-muted text-capitalize'>
          A travel app  
        </p>
        <Button
          type='button'
          variant='primary'
          className='mt-5 p-3 text-capitalize'
        >
          View UI
        </Button>{' '}
      </Container>
    </section>
  )
}

export default Header
