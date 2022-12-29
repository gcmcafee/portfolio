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
        <meta
          name="description"
          content="UX-minded front end development with a focus on fluid, lightweight and intuitive web experiences."
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.png" />
        <link rel="icon" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" sizes="57x57" href="favicon-57x57.png" />
        <link rel="icon" sizes="72x72" href="favicon-72x72.png" />
      </Head>
      <a
        id="skip-to-content"
        className="skip-to-content absolute z-[1050] -translate-x-full hover:-translate-x-0 focus:outline-none focus:-translate-x-0 inline-flex items-center py-3 mb-2 mr-4 text-center transition duration-300 ease-in-out border border-sky-400 bg-sky-400 px-9 text-slate-900 hover:text-white hover:bg-sky-600 hover:border-sky-600 font-semibold"
        href="#main"
      >
        Skip to Content
      </a>
      <header>
        <Navbar
          expanded={expanded}
          collapseOnSelect
          expand="lg"
          variant="dark"
          id="navbar"
          className={`${
            scroll ? '' : 'before:opacity-50 before:blur-[10px]'
          } fixed top-0 left-0 right-0 z-20 before:transition before:duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[200%] before:-z-index-10 before:-translate-y-1/2 before:translateY-[-50%] before:bg-gray-900/90 before:backdrop-blur-md before:backdrop-saturate-200`}
        >
          <div className="px-2 sm:px-4 flex w-full relative max-w-[90rem] mx-auto h-14 items-center">
            <div className="flex items-center mr-auto navbar-text ">
              <Link
                to="hello"
                smooth={true}
                offset={-54}
                duration={500}
                href="/"
                className="focus:outline-none relative z-10 block px-1 py-1 overflow-visible leading-5 tracking-wider text-white before:content-empty before:block before:absolute top-[-2px] before:top-[.4rem] before:bottom-[.1rem] before:left-[-0.5rem] before:border-l-[.25rem] before:opacity-0 before:translate-x-[-15px] before:transition-all before:duration-300 focus:before:translate-x-0  focus:before:opacity-100 hover:before:translate-x-0 hover:before:opacity-100 font-semibold "
              >
                UX-Minded
                <br />
                Front End Development
              </Link>
            </div>
            <Navbar.Toggle
              className="focus:outline-none text-xl px-3 py-1 z-10 relative border-0 cursor-pointer lg:hidden hover:opacity-40 focus:opacity-40"
              aria-controls="navbarTogglee"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse
              className="fixed top-0 bottom-0 left-0 right-0 items-center h-[auto_!important] ml-auto text-center lg:relative lg:h-auto [&.collapsing]:duration-200 [&.collapsing]:transition-opacity opacity-0 pointer-events-none [&.show]:opacity-100 [&.show]:pointer-events-auto flex lg:opacity-100 lg:pointer-events-auto [&.collapsing]:opacity-0 [&[style*='height']]:opacity-100 [&.collapsing]:pointer-events-auto"
              id="navbarTogglee"
            >
              <div
                className="overlay lg:hidden bg-gray-900/90 backdrop-blur-sm backdrop-saturate-200"
                onClick={() => setExpanded(false)}
              ></div>
              <ul
                id="nav"
                className="relative z-10 flex flex-col items-center mx-auto mb-2 lg:mr-0 lg:mb-0 spy-active navbar-nav lg:flex-row"
              >
                <li className="flex nav-item">
                  <span id="active-bar" className="hidden lg:block"></span>
                  <Link
                    className="focus:outline-none h-10 lg:h-14 flex justify-center items-center after:content-[''] nav-link relative px-8 text-white after:left-0 after:right-0 lg:after:top-0 after:bottom-auto after:h-[26px] lg:after:h-[4px] after:w-auto after:mr-0 after:ml-0 after:absolute after:bg-sky-400 lg:after:bg-white after:opacity-0 hover:after:opacity-30 focus:after:opacity-30 lg:hover:after:opacity-100 lg:focus:after:opacity-100 after:-z-10 font-semibold tracking-wider after:-skew-x-3 after:lg:skew-x-0 after:-skew-y-3 after:lg:skew-y-0"
                    activeClass="lg:after:bg-sky-400 after:opacity-30 lg:after:opacity-100"
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
                <li className="flex nav-item">
                  <Link
                    className="focus:outline-none h-10 lg:h-14 flex justify-center items-center after:content-[''] nav-link relative px-8 text-white after:left-0 after:right-0 lg:after:top-0 after:bottom-auto after:h-[26px] lg:after:h-[4px] after:w-auto after:mr-0 after:ml-0 after:absolute after:bg-sky-400 lg:after:bg-white after:opacity-0 hover:after:opacity-30 focus:after:opacity-30 lg:hover:after:opacity-100 lg:focus:after:opacity-100 after:-z-10 font-semibold tracking-wider after:-skew-x-3 after:lg:skew-x-0 after:-skew-y-3 after:lg:skew-y-0"
                    activeClass="lg:after:bg-sky-400 after:opacity-30 lg:after:opacity-100"
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
                <li className="flex nav-item">
                  <Link
                    className="focus:outline-none h-10 lg:h-14 flex justify-center items-center after:content-[''] nav-link relative px-8 text-white after:left-0 after:right-0 lg:after:top-0 after:bottom-auto after:h-[26px] lg:after:h-[4px] after:w-auto after:mr-0 after:ml-0 after:absolute after:bg-sky-400 lg:after:bg-white after:opacity-0 hover:after:opacity-30 focus:after:opacity-30 lg:hover:after:opacity-100 lg:focus:after:opacity-100 after:-z-10 font-semibold tracking-wider after:-skew-x-3 after:lg:skew-x-0 after:-skew-y-3 after:lg:skew-y-0"
                    activeClass="lg:after:bg-sky-400 after:opacity-30 lg:after:opacity-100"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={500}
                    onClick={() => setExpanded(false)}
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className="flex nav-item">
                  <Link
                    className="focus:outline-none h-10 lg:h-14 flex justify-center items-center after:content-[''] nav-link relative px-8 text-white after:left-0 after:right-0 lg:after:top-0 after:bottom-auto after:h-[26px] lg:after:h-[4px] after:w-auto after:mr-0 after:ml-0 after:absolute after:bg-sky-400 lg:after:bg-white after:opacity-0 hover:after:opacity-30 focus:after:opacity-30 lg:hover:after:opacity-100 lg:focus:after:opacity-100 after:-z-10 font-semibold tracking-wider after:-skew-x-3 after:lg:skew-x-0 after:-skew-y-3 after:lg:skew-y-0"
                    activeClass="lg:after:bg-sky-400 after:opacity-30 lg:after:opacity-100"
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
                <li className="mt-3 nav-item lg:mt-0 lg:ml-4">
                  <Link
                    className="focus:outline-none inline-flex items-center text-center transition duration-300 ease-in-out border rounded-full lg:mr-4 border-sky-400 bg-sky-400 px-8 text-slate-900 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 h-11 font-semibold tracking-wider"
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
