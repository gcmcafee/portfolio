import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-lg navbar-dark top"
      >
        <div className="container-fluid">
          <div className="navbar-text me-auto">
            <a href="#hello">
              UX-Minded
              <br />
              Front End Development
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglee"
            aria-controls="navbarTogglee"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarTogglee"
          >
            <div className="overlay"></div>
            <ul
              id="nav"
              className="spy-active navbar-nav mx-auto ms-md-auto me-md-0 mb-2 mb-md-0"
            >
              <li className="nav-item">
                <span id="active-bar" className="d-none d-md-block"></span>
                <Link href="/about"
                  className="nav-link active justify-content-center flex-fill"
                >
                  Hello
                </Link>
              </li>
              <li className="nav-item">
                <span id="active-bar" className="d-none d-md-block"></span>
                <a
                  className="nav-link active justify-content-center flex-fill"
                  href="#hello"
                >
                  Hello
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link justify-content-center flex-fill light-navbar"
                  href="#work"
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link justify-content-center flex-fill"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link justify-content-center flex-fill light-navbar"
                  href="#clients"
                >
                  Clients
                </a>
              </li>
              <li className="nav-item mt-3 mt-md-0 ms-md-2">
                <a
                  className="nav-link navbar-btn btn btn-primary"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}