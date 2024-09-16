import React from "react";
import { Link } from "react-router-dom"

function Book() {
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
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Appointment</h1>
        <div className="col-lg-6 mx-auto">
          <h3 className="display-5 fw-bold text-body-emphasis">Book One For You</h3>
          <p className="lead mb-4">Dr. XYZ Clinic
            C-201, 2nd Floor, Commercial Complex, Sector R6, Life Republic, Marunji, Hinjewadi Phase 2, Pune - 411057
          </p>
          
        </div>
      </div>
      <hr />
      <h2 className="text-center">Appointment Date</h2>
      <h4 className="text-center">Select Your Appointment Date</h4>
      <div className="container">
        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
          <div
            className="dropdown-menu d-block position-static p-2 mx-0 shadow rounded-3 w-340px"
            data-bs-theme="light"
          >
            <div className="d-grid gap-1">
              <div className="cal">
                <div className="cal-month d-flex justify-content-center align-items-center my-4">
                  <button className="btn cal-btn" type="button">
                    <img src="Left.png" className="bi" width="25" height="25" alt="" />
                  </button>

                  <select className="form-select cal-month-name">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option selected value="June">
                      June
                    </option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <button className="btn cal-btn" type="button">
                    <img src="Right.png" className="bi" width="25" height="25" alt="" />
                  </button>
                </div>
                <div className="container cal-weekdays text-body-secondary d-flex gap-4 justify-content-center">
                  <div className="d-flex flex-column justify-content-center gap-4 flex-md-row align-items-center">
                    <div className="d-flex flex-md-row justify-content-spaceevenly align-items-center gap-4">
                      <p className="cal-weekday d-flex gap-4">Sund</p>
                      <p className="cal-weekday d-flex gap-4">Mond</p>
                      <p className="cal-weekday d-flex gap-4">Tued</p>
                      <p className="cal-weekday d-flex gap-4">Wedn</p>
                      <p className="cal-weekday d-flex gap-4">Thur</p>
                      <p className="cal-weekday d-flex gap-4">Frid</p>
                      <p className="cal-weekday d-flex gap-4">Satu</p>
                    </div>
                  </div>
                </div>
                <div className="container cal-weekdays text-body-secondary d-flex gap-4 justify-content-center">
                  <div className="text-body-secondary d-flex flex-column gap-4 justify-content-center">
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn cal-btn" disabled type="button">
                        30
                      </button>
                      <button className="btn cal-btn" disabled type="button">
                        31
                      </button>

                      <button className="btn cal-btn btn-danger" type="button">
                        01
                      </button>
                      <button className="btn cal-btn btn-danger" type="button">
                        02
                      </button>
                      <button className="btn cal-btn btn-danger" type="button">
                        03
                      </button>
                      <button className="btn cal-btn btn-danger" type="button">
                        04
                      </button>
                      <button className="btn cal-btn" type="button">
                        05
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn cal-btn" type="button">
                        06
                      </button>
                      <button className="btn cal-btn" type="button">
                        07
                      </button>

                      <button className="btn cal-btn" type="button">
                        08
                      </button>
                      <button className="btn cal-btn" type="button">
                        09
                      </button>
                      <button className="btn cal-btn" type="button">
                        10
                      </button>
                      <button className="btn cal-btn" type="button">
                        11
                      </button>
                      <button className="btn cal-btn" type="button">
                        12
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn cal-btn btn-secondary" type="button">
                        13
                      </button>
                      <button className="btn cal-btn" type="button">
                        14
                      </button>

                      <button className="btn cal-btn" type="button">
                        15
                      </button>
                      <button className="btn cal-btn" type="button">
                        16
                      </button>
                      <button className="btn cal-btn" type="button">
                        17
                      </button>
                      <button className="btn cal-btn" type="button">
                        18
                      </button>
                      <button className="btn cal-btn" type="button">
                        19
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn cal-btn btn-secondary" type="button">
                        20
                      </button>
                      <button className="btn cal-btn" type="button">
                        21
                      </button>

                      <button className="btn cal-btn" type="button">
                        22
                      </button>
                      <button className="btn cal-btn" type="button">
                        23
                      </button>
                      <button className="btn cal-btn" type="button">
                        24
                      </button>
                      <button className="btn cal-btn" type="button">
                        25
                      </button>
                      <button className="btn cal-btn" type="button">
                        26
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn cal-btn" type="button">
                        27
                      </button>
                      <button className="btn cal-btn" type="button">
                        28
                      </button>

                      <button className="btn cal-btn" type="button">
                        29
                      </button>
                      <button className="btn cal-btn" type="button">
                        30
                      </button>
                      <button className="btn cal-btn" type="button">
                        31
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center container">
          <span className="d-flex gap-4">
            <button className="btn btn-secondary">#</button>
            <h5>Clinic Closed Days</h5>
          </span>
          <span className="d-flex gap-4">
            <button className="btn">#</button>
            <h5>Clinic open Days</h5>
          </span>
          <span className="d-flex gap-4">
            <button className="btn btn-danger">#</button>
            <h5>Booked Days</h5>
          </span>
        </div>
      </div>
      <hr />
      <div className="container">
        <h3 className="d-flex justify-content-center">Select Appointment Time</h3>
        <h5 className="d-flex justify-content-center">Select the appointment time on Monday, September 16, 2024.
        </h5>
        <div className="d-flex flex-column gap-4 justify-content-center align-items-center my-4">
          <div className="d-flex align-items-center gap-3">
            <button type="button" className="btn btn-outline-secondary">10:00 am</button>
            <button type="button" className="btn btn-outline-secondary"><s>10:30 am</s></button>
            <button type="button" className="btn btn-outline-secondary"><s>11:15 am</s></button>
            <button type="button" className="btn btn-outline-secondary">11:30 am</button>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button type="button" className="btn btn-outline-secondary"><s>12:00 am</s></button>
            <button type="button" className="btn btn-outline-secondary"><s>12:15 am</s></button>
            <button type="button" className="btn btn-outline-secondary">12:45 am</button>
            <button type="button" className="btn btn-outline-secondary">1:00 am</button>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button type="button" className="btn btn-outline-secondary"><s>2:00 am</s></button>
            <button type="button" className="btn btn-outline-secondary"><s>2:45 am</s></button>
          </div>
        </div>
      </div>
      <hr />


    </>
  );
}

export default Book;
