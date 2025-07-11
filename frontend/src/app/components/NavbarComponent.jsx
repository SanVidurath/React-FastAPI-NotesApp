import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="warning" expand="lg">
        <Navbar.Brand className="m-auto" style={{fontSize: "2.5rem"}}>
          Notes App
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
