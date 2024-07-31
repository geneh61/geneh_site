import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useStaticQuery, graphql } from 'gatsby';
import useScrollDirection from '../utils/useScrollDirection';
import './styles.css';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks {
            name
            url
          }
        }
      }
    }
  `);

  const { navLinks } = data.site.siteMetadata;
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollDirection]);

  return (
    <Navbar expand="lg" className={`bg-body-tertiary fixed-top ${isVisible ? 'navbar-visible' : 'navbar-hidden'} custom-navbar`}>
      <Container className="navbar-container">
        <Nav className="me-auto main-nav">
          {navLinks.slice(0, 4).map((link) => (
            <Nav.Link key={link.url} href={link.url} className="nav-link">{link.name}</Nav.Link>
          ))}
        </Nav>
        <Nav className="ms-auto">
          {navLinks.slice(4, 5).map((link) => (
            <Nav.Link key={link.url} href={link.url} className="nav-link">{link.name}</Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
