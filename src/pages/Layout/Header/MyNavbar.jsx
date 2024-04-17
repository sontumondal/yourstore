import React from 'react'

import {Navbar,Container,Row,Col,Nav} from "react-bootstrap"
import { useSelector } from 'react-redux'
import {NavLink} from "react-router-dom" 
import ProfileLogout from '../../auth/ProfileLogout'

const MyNavbar = () => {
  const {cart}=useSelector(state => state.allcart)
  const {isLogin}=useSelector(state => state.authentication)

  return (
    <>
    <Container fluid >
        <Row >
            <Col  >
            <Navbar fixed='top' variant='dark' expand="lg" className='navbar'>
                <Container >
                    <Navbar.Brand className='nav-main-logo'>
                   <NavLink to="/"> <img src="/images/logo.webp" alt="logo" className='nav-logo' />  </NavLink>  
                 
                 <p className="nav-heading">Your Store</p>              
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='my-nav'/>
                    <Navbar.Collapse id="my-nav">
                    <Nav className='me-auto fw-bold  navbar-link' >
                        <NavLink to="/" >home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/product">Product</NavLink>
                        <NavLink to="/search">Search</NavLink> 
                    </Nav>
                    <Navbar.Text>
                      
                    {isLogin? (<ProfileLogout/> ):( <NavLink to="/login">
                      <button className='nav-sign-btn'>Sign in</button>
                    </NavLink>)}

                      
                      
                      
                     
                    </Navbar.Text>
                    <Navbar.Text >
                      <NavLink to="/cart" > <button className='nav-cart-btn'>Cart:-{cart.length}</button></NavLink>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default MyNavbar
