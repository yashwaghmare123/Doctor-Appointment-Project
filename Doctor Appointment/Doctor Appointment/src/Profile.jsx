import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Profile() {
  return (
    <>
    <nav className="py-2 bg-body-tertiary border-bottom sticky-top">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/">
                <img src="dashb.png" height={30} alt="" /> Dashboard </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2" to="/Profile">
                <img src="prof.png" height={30} alt="" /> Profile </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2" to="/History">
                <img src="his.png" height={30} alt="" /> History </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2" to="/Settings">
                <img src="sett.png" height={30} alt="" /> Settings </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link link-body-emphasis px-2 active" to="/Signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      
       
    
    </>
  )
}

export default Profile