import React from 'react'
import { Link } from "react-router-dom"


function Care() {
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
         <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="cre.webp"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                CARE
            </h1>
            <p class="lead">
            As a woman, your health undergoes many changes throughout your life. Great care involves listening and treating the physical and emotional needs of the women. Dr. Varshali Mali is an experienced female Gynecologist & Pregnancy doctor. She offers gynecology & pregnancy care for women of all ages starting from their first menstrual cycle through menopause.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Query</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
         
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">QUESTION ?
          Ask to doctor</h3>
          <p>Have a question about pregnancy, gynecology problems, health or wellness? Ask it to the experienced Gynecologist & Pregnancy doctor. Get the quick answers</p>
          <a href="#" class="btn btn-primary">
            Ask a Question
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">APPOINTMENT
          Book with gynecologist</h3>
          <p>Dr. Varshali Mali is an experienced female Gynecologist & Pregnancy doctor. Book appointment with her and get the best consulting, care, and solutions.</p>
          <a href="#" class="btn btn-primary">
            Book an Appointment
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Know more</h3>
          <p>Whether you're looking to conceive a baby or are already enjoying your pregnancy, Dr. Varshali's pregnancy care solutions help to keep you and your baby healthy. She offers a full range of pregnancy care services for your safe pregnancy and delivery of a healthy baby.</p>
          <a href="#" class="btn btn-primary">
            Doctor's Profile
          </a>
        </div>
      </div>
    </div>
      </div>
      <hr />

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="clinic.webp"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Gynecology care solutions
            </h1>
            <p class="lead">
            A woman undergoes a lot of physical and mental changes throughout her life. No matter what stage you are in life, Dr. Varshali provides care, diagnosis, and education about changes happening to your body. Her gynecology services aim to provide routine and specialized care to maintain women's health and treat diseases. She treats the full spectrum of gynecology conditions.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Doctor's Profile
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      


    </>
  )
}

export default Care