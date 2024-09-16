import React from "react";
import { Link } from "react-router-dom"

function Doctor() {
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
        <img src="Doctor.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Dr. XYZ</h1>
        <h4 className="Lead">Gyaenacologist</h4>
        <h4 className="Lead">-MBBS</h4>
        <h4 className="Lead">-DNB</h4>
        <h4 className="Lead">-Diploma</h4>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start my-4">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Book Your Appointment</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Know our Clinics</button>
        </div>
      </div>
    </div>
  </div>
      <hr />
      <div className="container d-flex justify-content-between">
        <div className="container d-flex justify-content-between">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <h3>Sr.No</h3>
                </th>
                <th colSpan={2}>
                  <h3>Educational qualification</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Speciality</td>
                <td>Obstetrician & Gynecologist</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  Diploma in Gynecological Endoscopy (Laparoscopy and
                  Hysteroscopy)
                </td>
                <td>2020 University of Schleswig Holstein - Kiel Germany</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>DNB</td>
                <td>
                  2005 Dr. D. Y. Patil Medical College Hospital & Research
                  Centre, Pune
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>MBBS</td>
                <td>
                  2005 Dr. D. Y. Patil Medical College Hospital & Research
                  Centre, Pune
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Registration</td>
                <td>2006113374 Maharashtra Medical Council</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Membership</td>
                <td>
                  Indian Medical Association (IMA) Maharashtra Medical Council
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container d-flex justify-content-between">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <h3>Sr.No</h3>
                </th>
                <th colSpan={2}>
                  <h3>Experience as gynecologist</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Gynecologist consultant</td>
                <td>
                  Mar 2018 to till date Dr. Varshali's Gynecology Clinic, Pune
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Gynecologist consultant</td>
                <td>
                  Jul 2016 to till date Surya Mother and Child Care Hospital,
                  Pune
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Gynecologist consultant</td>
                <td>
                  Jul 2016 to Mar 2018 Vitalife Clinic Baner and Wakad, Pune
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Gynecologist lecturer</td>
                <td>
                  Dec 2014 to Jun 2016 Deenanath Mangeshkar Hospital, Pune
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Senior gynecologist resident</td>
                <td>
                  Apr 2013 to Nov 2013 Smt. Kashibai Navale Hospital, Pune
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />

      <div className="container-fluid row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                Latest Article
              </strong>
              <h3 className="mb-0">Importance | Meaning | When | Why</h3>
              <div className="mb-1 text-body-secondary">By Dr. XYZ</div>
              <p className="card-text mb-auto">
                During the second trimester, one of the vital and necessary
                pregnancy ultrasound scan is the Anomaly scan or TIFFA scan
                (Targeted Imaging for Fetal Anomalies). This is usually done
                within 18 to 20 weeks of gestational age. This scan targets
                checking the baby's physical development, growth, and how the
                baby is doing and detecting the abnormalities, if any. Read this
                article to learn more about an Anomaly scan or TIFFA scan, its
                meaning, importance, schedule, and report.
              </p>
              <a
                href="#"
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success-emphasis">
                Latest Article
              </strong>
              <h3 className="mb-0">Importance | Meaning | When | Why</h3>
              <div className="mb-1 text-body-secondary">By Dr. XYZ</div>
              <p className="mb-auto">
                Dr. Varshali Mali writes on various topics related to
                gynecology, pregnancy, adulthood for girls, and women's
                wellness. We use various social media platforms to spread health
                awareness to our patients and community. Follow us on the social
                media platforms below to remain updated and get knowledge,
                health tips, and more from Dr. Varshali Mali.
              </p>
              <a
                href="#"
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
                
              </a>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
      </div>
      <hr />
      
    </>
  );
}

export default Doctor;
