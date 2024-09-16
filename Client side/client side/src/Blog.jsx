import React from 'react'
import { Link } from "react-router-dom"

function Blog() {
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
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4">LATEST ARTICLE</h1>
          <p className="lead my-3">Importance | Meaning | When | Why</p>
          <p>By Dr.XYZ (Gynecologist)</p>
          <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Read more...</a></p>
        </div>
      </div>
      <hr />
      <div className="row featurette container mx-4 my-4">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Get latest health tips <span className="text-body-secondary">Follow on social media</span></h2>
          <p className="lead">Dr. Varshali Mali writes on various topics related to gynecology, pregnancy, adulthood for girls, and women's wellness. We use various social media platforms to spread health awareness to our patients and community.
            Follow us on the social media platforms below to remain updated and get knowledge, health tips, and more from Dr. Varshali Mali.
          </p>
          <button type="button" className="btn btn-outline-primary mx-2">Facebook</button>
          <button type="button" className="btn btn-outline-secondary mx-2">Instagram</button>
          <button type="button" className="btn btn-outline-success mx-2">LinkedIn</button>
          <button type="button" className="btn btn-outline-danger mx-2">Twitter</button>
        </div>
        <div className="col-md-5">
          <img src="Doctor.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="" />
        </div>
      </div>
      <hr />

      <div className="container">
        <div className="row mx-4 p-4">
          <div className="col-lg-4">
            <img src="gfd" className="bd-placeholder-img rounded-circle" alt="" />
            <h2 className="fw-normal">Our brand identity story – Dr. Varshali’s Gynecology Clinic</h2>
            <p>A story of our brand. A simple one but connected deeply to our heart and our way of being. Three beautiful, connected pieces in our story. The father, the mother, the baby. Read the story.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img src="gfd" className="bd-placeholder-img rounded-circle" alt="" />
            <h2 className="fw-normal">Diwali and pregnancy – Tips for safe and healthy celebrations</h2>
            <p>You are pregnant, and Diwali is around the corner. A great combination of joy. Read this article to learn about pregnancy care to be taken during Diwali.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img src="gfd" className="bd-placeholder-img rounded-circle" alt="" />
            <h2 className="fw-normal">Gynecology and pregnancy knowledge now in Marathi</h2>
            <p>Facts, advice, and guidance on gynecology, pregnancy now in Marathi..</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mx-4 p-4">
          <div className="col-lg-4">
            <img src="gfd" className="bd-placeholder-img rounded-circle" alt="" />
            <h2 className="fw-normal">Our brand identity story – Dr. Varshali’s Gynecology Clinic</h2>
            <p>A story of our brand. A simple one but connected deeply to our heart and our way of being. Three beautiful, connected pieces in our story. The father, the mother, the baby. Read the story.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img src="gfd" className="bd-placeholder-img rounded-circle" alt="" />
            <h2 className="fw-normal">Diwali and pregnancy – Tips for safe and healthy celebrations</h2>
            <p>You are pregnant, and Diwali is around the corner. A great combination of joy. Read this article to learn about pregnancy care to be taken during Diwali.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img src="gfd" className="bd-placeholder-img rounded-circle" alt="" />
            <h2 className="fw-normal">Gynecology and pregnancy knowledge now in Marathi</h2>
            <p>Facts, advice, and guidance on gynecology, pregnancy now in Marathi..</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Blog
