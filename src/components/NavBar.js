import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchBox from './SearchBox';


const NavBar = (props) => {

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Indonesia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#programming">Programming</Nav.Link>
            <Nav.Link href="#saved">Saved</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            <SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
