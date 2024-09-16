import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript for dropdowns

function Sidebar() {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2 active" aria-current="page">
                <img src="dashb.png" height={30} alt="" /> Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                <img src="prof.png" height={30} alt="" /> Profile</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                <img src="his.png" height={30} alt="" /> History</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2" to="./Settings">
                <img src="sett.png" height={30} alt="" /> Settings</Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">Login</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">
              <h3>
                <img src="logo.jpg" height={60} alt="" srcSet="" /> Dr.XYZ
              </h3>
              <h5>Gynecologist</h5>
            </span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </header>

      <div className="container d-flex justify-content-evenly p-4" style={{ gap: '2rem' }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-bg-primary mb-3 container d-flex justify-content-evenly p-4">
              <div className="card-header">Appointment</div>
              <div className="card-body">
                <h3 className="card-title">5</h3>
                <p className="card-text">Total No of patients</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-secondary mb-3 container d-flex justify-content-evenly p-4">
              <div className="card-header">Patients</div>
              <div className="card-body">
                <h3 className="card-title">10</h3>
                <p className="card-text">Total No of patients</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-success mb-3 container d-flex justify-content-evenly p-4">
              <div className="card-header">Clinic Consulting</div>
              <div className="card-body">
                <h3 className="card-title">7</h3>
                <p className="card-text">Total No of patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-evenly">
        <ul className="list-group mb-3">
          <h3>Appointment Request</h3>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">John Doe</h6>
              <small className="text-body-secondary">Clinic Consulting</small>
            </div>
            <span className="text-success">Today 11:00am 
              <p>Mumbai</p>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Frank jordon</h6>
              <small className="text-body-secondary">Emergency</small>
            </div>
            <span className="text-success">10:00
            <p>Mumbai</p>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Ella Lucia</h6>
              <small className="text-body-secondary">Clinic Consulting</small>
            </div>
            <span className="text-success">12:00 
              <p>Mumbai</p>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between ">
            <div>
              <h6 className="my-0">Lucida Ferro</h6>
              <small className="text-body-secondary">Vedic Consulting</small>
            </div>
            <span className="text-success">2:00
            <p>Mumbai</p>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between ">
            <div>
              <h6 className="my-0">Lucida Ferro</h6>
              <small className="text-body-secondary">Vedic Consulting</small>
            </div>
            <span className="text-success">2:00 
              <p>Mumbai</p>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between ">
            <div>
              <h6 class="my-0">Lucida Ferro</h6>
              <small class="text-body-secondary">Vedic Consulting</small>
            </div>
            <span className="text-success">2:00 
              <p>Mumbai</p>
            </span>
          </li>         
           <li class="list-group-item d-flex justify-content-between ">
            <div>
              <h6 className="my-0">Lucida Ferro</h6>
              <small className="text-body-secondary">Vedic Consulting</small>
            </div>
            <span className="text-success">2:00 
              <p>Mumbai</p>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total Patients</span>
            <strong>7</strong>
          </li>
        
        </ul>

        <ul className="list-group mb-3">
          <h3>Today's Appointments</h3>
          <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">John Doe</h6>
          <small className="text-body-secondary">Clinic Consulting</small>
        </div>
        <span className="text-body-secondary">Today 11:00am
          <p>Mumbai</p>
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">Frank jordon</h6>
          <small className="text-body-secondary">Emergency</small>
        </div>
        <span className="text-body-secondary">10:00
          <p>Mumbai</p>
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">Ella Lucia</h6>
          <small className="text-body-secondary">Clinic Consulting</small>
        </div>
        <span className="text-body-secondary">12:00
          <p>Mumbai</p>
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between ">
        <div>
          <h6 className="my-0">Lucida Ferro</h6>
          <small className="text-body-secondary">Vedic Consulting</small>
        </div>
        <span className="text-success">2:00
          <p>Mumbai</p>
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total Patients</span>
        <strong>4</strong>
      </li>
        </ul>
      </div>

      <hr />
    </>
  );
}

export default Sidebar;
