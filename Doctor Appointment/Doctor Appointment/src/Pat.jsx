import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Pat() {
  return (
    <>
    
    <div class="container card my-4 p-4">
  <div class="card-header">
    Profile
  </div>
  <div class="card-body">
    <h5 class="card-title">John Doe</h5>
    <p class="card-text">Patient No - 1</p>
    <p class="card-text">Age - 22</p>
    <p class="card-text">Date of Birth - 28/02/2002</p>
    <p class="card-text">Problem - Gyenic Problem</p>
    <p class="card-text">Consulting - 1st time</p>

    <a href="#" class="btn btn-primary">Approve</a>
  </div>
</div>

    </>
  )
}

export default Pat