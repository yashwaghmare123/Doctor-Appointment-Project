import React from "react";
import { Link } from "react-router-dom"
function About() {
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

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="doc.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              OUR STORY
            </h1>
            <p className="lead">
              Being a mother and being a father is one of the best things that
              can happen to the human being. It brings the joy, happiness,
              responsibility and almost all emotions one can imagine. The
              pregnancy journey, the journey to being a mother and father is a
              very important part. There are many stations on the pregnancy
              journey between "the news" that someone is arriving and "the
              arrival" of a baby. Both mother and father go through an emotional
              roller-coaster. It's something new, something you have never
              experienced before. During this time, you need someone who you can
              trust. Someone who knows what's happening with you. Someone who
              gives you guidance and care during this exciting pregnancy
              journey. At Dr. Varshali's Gynecology & Pregnancy clinic, our main
              focus is on making this journey more enjoyable, and safe. We
              believe that a healthy baby needs a happy mother, a father with a
              lot of patience, and a doctor who knows what's going on. We are here
              to help during your journey to ultimate parenting and happiness.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Read More
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="clinic.webp"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              OUR CLINIC
            </h1>
            <p className="lead">
              Providing a better experience to patients is the primary value for
              us at Dr. Varshali's gynecology clinic. We have been working on
              this since the day of our clinic's inception. Our clinic ambiance
              is specifically designed to give you a feeling of openness and
              freedom. A casual, fresh look and motivational elements in the
              clinic will entice you to create, leave and take away memories
              with you. Learn more about what you will experience when you visit
              the clinic.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Read More
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Location
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">OPEN HOURS</h1>
            <p className="lead">
              These are clinic timings for Dr. Varshali's Gynecology clinic. Dr. Varshali is also available at other locations. To know about other location timings, refer to the book an appointment page.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-outline-danger btn-lg px-4">
                Book an Appointment
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="tm.jpg" alt="" width="400" height={400} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
