import React from "react";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom sticky-top">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2 active" to="/">
                <img src="Learn.png" height={30} alt="" srcSet="" />
                Learn
                </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Care">
                <img src="care.png" height={30} alt="" srcSet="" />
                Care
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Doctor">
                <img src="Do.png" height={30} alt="" srcSet="" />
                Doctor
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/About">
                <img src="abo.png" height={30} alt="" srcSet="" />
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Blog">
                <img src="blog.png" height={30} alt="" srcSet="" />
                Blog
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-danger">
              <Link className="nav-link link-body-emphasis px-2 active" to="/Book">
                  Book an Appointment
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <br />
            <span className="fs-4">
              <h3>
                <img src="logo.jpg" height={60} alt="" srcSet="" />
                Dr.XYZ
              </h3>
              <h5>Gynecologist</h5>
            </span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>

      <div className="container px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          A Baby Fills a place in Your Heart that you never knew was empty.
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Let's TOGETHER make this journey a memorable one !!
          </p>
          <h4 className="lead mb-4">
            <strong>
              Dr. XYZ <br />
              Gynecologist
            </strong>
          </h4>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Book an Appointment
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Doctor Profile
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              SUBSCRIBE
            </h1>
            <p className="col-lg-10 fs-4">
              Women body goes through many transitions. From a childhood, to
              teenage, to adult, to grownup woman, she experiences many health
              challenges. Dr. XYZ attempts to address many concerns and provide
              health guidance. Subscribe to our health updates and be the first
              one to receive the information.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Enter Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Enter Email</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> I am not a robot
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Subscribe
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                Be the first one to get the health tip from Dr.XYZ
              </small>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4">LATEST ARTICLE</h1>
          <p className="lead my-3">Importance | Meaning | When | Why</p>
          <p>By Dr.XYZ (Gynecologist)</p>
          <p className="lead mb-0">
            <a href="#" className="text-body-emphasis fw-bold">
              Read more...
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Care
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Doctor
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Blog
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>

      <hr />
    </>
  );
}

export default Navbar;
