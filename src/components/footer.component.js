import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Navbar expand='lg' variant='light' bg='light'>
      <Container>
        <Link to='/' className='nav-link'>
          <Navbar.Brand
            style={{
              color: "#ECA72C",
              border: "#ECA72C 2px solid",
              padding: "5px 10px 5px 10px",
            }}
          ></Navbar.Brand>
        </Link>
        <Container>
          Made by{" "}
          <a
            href='https://www.linkedin.com/in/nik-poliarco-3aaa181a3/'
            target='_blank'
            rel='noreferrer'
          >
            Albert Nikolai Poliarco
          </a>
        </Container>
      </Container>
    </Navbar>
  )
}

export default Footer
