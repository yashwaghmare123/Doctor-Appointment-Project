// src/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom sticky-top">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2 active" to="/">
                <img src="dashb.png" height={30} alt="" /> Dashboard{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2" to="/Profile">
                <img src="prof.png" height={30} alt="" /> Profile{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2" to="/History">
                <img src="his.png" height={30} alt="" /> History{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-body-emphasis px-2" to="/Settings">
                <img src="sett.png" height={30} alt="" /> Settings{" "}
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <Link
                className="nav-link link-body-emphasis px-2 active"
                to="/Login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link-body-emphasis px-2 active"
                to="/Signup"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container card my-4 p-4">
        <div class="card-header">Profile</div>
        <div class="card-body">
          <h5 class="card-title">Dr. XYZ</h5>
          <p class="card-text">Change the sign </p>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add New Sign
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Attach New Sign
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <img src="" alt="Sign" srcset="" />
                  <p>Attach Image of New Sign</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleMod"
                  >
                    Save Changes
                  </button>

                  <div
                    class="modal fade"
                    id="exampleMod"
                    tabindex="-1"
                    aria-labelledby="exampleModLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModLabel">
                            Status
                          </h1>
                        </div>
                        <div class="modal-body">Changed Successfully !!!</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button mx-4"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModa"
          >
            Your Sign
          </button>

          <div
            class="modal fade"
            id="exampleModa"
            tabindex="-1"
            aria-labelledby="exampleModaLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModaLabel">
                    Your Sign
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <img src="" alt="Sign Image" srcset="" />
                  <p>Here is Your Sign</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
