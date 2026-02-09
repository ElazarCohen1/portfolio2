'use client'

import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function NavbarMenu() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        margin: '0px 0px 10px 0px',
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#about">À propos</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
