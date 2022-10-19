import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  // ESC key pressed -> close open full page navigation
  const detectKeyDown = (e) => {
    if (e.key === 'Escape') {
      setExpanded(false);
    }
  };
  useEffect(() => {
    // Fires: ESC key pressed -> close open full page navigation
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const evalTop = () => {
      setScroll(window.scrollY > 50);
    };
    evalTop();
    window.addEventListener('scroll', () => {
      evalTop();
    });
  }, []);

  return (
    <>
      <Head>
        <title>Cody McAfee | Front End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="UX-minded front end development with a focus on fluid, lightweight and intuitive web experiences." />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.png" />
        <link rel="icon" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" sizes="57x57" href="favicon-57x57.png" />
        <link rel="icon" sizes="72x72" href="favicon-72x72.png" />
      </Head>
      <a className="skip-to-content" href="#main">
        Skip to Content
      </a>
      <header>
        <Navbar
          expanded={expanded}
          collapseOnSelect
          expand="lg"
          variant="dark"
          id="navbar"
          fixed="top"
          className={scroll ? 'not-top' : 'top'}
        >
          <div className="container-fluid">
            <div className="navbar-text me-auto">
              <Link
                to="hello"
                smooth={true}
                offset={-54}
                duration={500}
                href="/"
              >
                UX-Minded
                <br />
                Front End Development
              </Link>
            </div>
            <Navbar.Toggle
              aria-controls="navbarTogglee"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse className="text-center" id="navbarTogglee">
              <div className="overlay" onClick={() => setExpanded(false)}></div>
              <ul
                id="nav"
                className="spy-active navbar-nav mx-auto ms-lg-auto me-lg-0 mb-2 mb-lg-0"
              >
                <li className="nav-item">
                  <span id="active-bar" className="d-none d-lg-block"></span>
                  <Link
                    className="nav-link justify-content-center flex-fill"
                    activeClass="active"
                    to="hello"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={500}
                    onClick={() => setExpanded(false)}
                    href="#hello"
                  >
                    Hello
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link justify-content-center flex-fill"
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={500}
                    onClick={() => setExpanded(false)}
                    href="#work"
                  >
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link justify-content-center flex-fill"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}
                    onClick={() => setExpanded(false)}
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link justify-content-center flex-fill"
                    activeClass="active"
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={500}
                    onClick={() => setExpanded(false)}
                    href="#clients"
                  >
                    Clients
                  </Link>
                </li>
                <li className="nav-item mt-3 mt-lg-0 ms-lg-2">
                  <Link
                    className="nav-link navbar-btn btn btn-primary"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={1000}
                    onClick={() => setExpanded(false)}
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
}
