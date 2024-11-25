import { Container, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <section className='jumbotron text-center'>
      <Container>
        <h1>WanderSync App</h1>
        <p className='lead text-muted'>
          A travel app made by Group 14 for CS2340 @ GT
        </p>
        <Button
          type='button'
          variant='primary'
          className='mt-2 p-3'
          href='/UI'
        >
          View App
        </Button>
      </Container>
    </section>
  )
}

export default Header
