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
        className="skip-to-content absolute z-[1050] mb-2 mr-4 inline-flex -translate-x-full items-center border border-sky-400 bg-sky-400 py-3 px-9 text-center font-semibold text-slate-900 transition duration-300 ease-in-out hover:-translate-x-0 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus:-translate-x-0 focus:outline-none"
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
          } before:-z-index-10 before:translateY-[-50%] fixed top-0 left-0 right-0 z-20 before:absolute before:top-0 before:left-0 before:h-[200%] before:w-full before:-translate-y-1/2 before:bg-gray-900/90 before:backdrop-blur-md before:backdrop-saturate-200 before:transition before:duration-500 before:content-['']`}
        >
          <div className="relative mx-auto flex h-14 w-full max-w-[90rem] items-center px-2 sm:px-4">
            <div className="navbar-text mr-auto flex items-center ">
              <Link
                to="hello"
                smooth={true}
                offset={-54}
                duration={500}
                href="/"
                className="before:content-empty relative top-[-2px] z-10 block overflow-visible px-1 py-1 font-semibold leading-5 tracking-wider text-white before:absolute before:top-[.4rem] before:bottom-[.1rem] before:left-[-0.5rem] before:block before:translate-x-[-15px] before:border-l-[.25rem] before:opacity-0 before:transition-all before:duration-300 hover:before:translate-x-0  hover:before:opacity-100 focus:outline-none focus:before:translate-x-0 focus:before:opacity-100 "
              >
                UX-Minded
                <br />
                Front End Development
              </Link>
            </div>
            <Navbar.Toggle
              className="relative z-10 cursor-pointer border-0 px-3 py-1 text-xl hover:opacity-40 focus:opacity-40 focus:outline-none lg:hidden"
              aria-controls="navbarTogglee"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse
              className="pointer-events-none fixed top-0 bottom-0 left-0 right-0 ml-auto flex h-[auto_!important] items-center text-center opacity-0 lg:pointer-events-auto lg:relative lg:h-auto lg:opacity-100 [&.collapsing]:pointer-events-auto [&.collapsing]:opacity-0 [&.collapsing]:transition-opacity [&.collapsing]:duration-200 [&.show]:pointer-events-auto [&.show]:opacity-100 [&[style*='height']]:opacity-100"
              id="navbarTogglee"
            >
              <div
                className="overlay bg-gray-900/90 backdrop-blur-sm backdrop-saturate-200 lg:hidden"
                onClick={() => setExpanded(false)}
              ></div>
              <ul
                id="nav"
                className="spy-active navbar-nav relative z-10 mx-auto mb-2 flex flex-col items-center lg:mr-0 lg:mb-0 lg:flex-row"
              >
                <li className="nav-item flex">
                  <Link
                    className="nav-link relative flex h-10 items-center justify-center px-8 font-semibold tracking-wider text-white before:absolute before:left-0 before:right-0 before:bottom-auto before:-z-10 before:mr-0 before:ml-0 before:h-[26px] before:w-auto before:-skew-x-3 before:-skew-y-3 before:bg-violet-400 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-50 focus:outline-none focus:before:opacity-50 lg:h-14 lg:before:top-0 lg:before:h-[4px] before:lg:skew-x-0 before:lg:skew-y-0 lg:before:bg-white "
                    activeClass="before:opacity-50 lg:before:opacity-100 lg:hover:before:opacity-100 lg:focus:before:opacity-100"
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
                <li className="nav-item flex">
                  <Link
                    className="nav-link relative flex h-10 items-center justify-center px-8 font-semibold tracking-wider text-white before:absolute before:left-0 before:right-0 before:bottom-auto before:-z-10 before:mr-0 before:ml-0 before:h-[26px] before:w-auto before:-skew-x-3 before:-skew-y-3 before:bg-violet-400 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-50 focus:outline-none focus:before:opacity-50 lg:h-14 lg:before:top-0 lg:before:h-[4px] before:lg:skew-x-0 before:lg:skew-y-0 lg:before:bg-white "
                    activeClass="before:opacity-30 lg:before:opacity-100 lg:hover:before:opacity-100 lg:focus:before:opacity-100"
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
                <li className="nav-item flex">
                  <Link
                    className="nav-link relative flex h-10 items-center justify-center px-8 font-semibold tracking-wider text-white before:absolute before:left-0 before:right-0 before:bottom-auto before:-z-10 before:mr-0 before:ml-0 before:h-[26px] before:w-auto before:-skew-x-3 before:-skew-y-3 before:bg-violet-400 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-50 focus:outline-none focus:before:opacity-50 lg:h-14 lg:before:top-0 lg:before:h-[4px] before:lg:skew-x-0 before:lg:skew-y-0 lg:before:bg-white "
                    activeClass="before:opacity-30 lg:before:opacity-100 lg:hover:before:opacity-100 lg:focus:before:opacity-100"
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
                <li className="nav-item flex">
                  <Link
                    className="nav-link relative flex h-10 items-center justify-center px-8 font-semibold tracking-wider text-white before:absolute before:left-0 before:right-0 before:bottom-auto before:-z-10 before:mr-0 before:ml-0 before:h-[26px] before:w-auto before:-skew-x-3 before:-skew-y-3 before:bg-violet-400 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-50 focus:outline-none focus:before:opacity-50 lg:h-14 lg:before:top-0 lg:before:h-[4px] before:lg:skew-x-0 before:lg:skew-y-0 lg:before:bg-white "
                    activeClass="before:opacity-30 lg:before:opacity-100 lg:hover:before:opacity-100 lg:focus:before:opacity-100"
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
                <li className="nav-item mt-3 lg:mt-0 lg:ml-4">
                  <Link
                    className="inline-flex h-11 items-center rounded-full px-8 text-center font-semibold tracking-wider text-white shadow-[inset_0_0_0_2px_white] transition duration-300 ease-in-out hover:bg-white hover:text-slate-800  focus:bg-white focus:text-slate-800 focus:outline-none lg:mr-4 [&.active]:bg-white [&.active]:text-slate-800"
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
