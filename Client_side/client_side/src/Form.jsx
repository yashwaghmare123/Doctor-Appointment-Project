import React from 'react';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        const mobileNumber = event.target.mobileNumber.value;
        const ageYears = event.target.ageYears.value;
        const ageMonths = event.target.ageMonths.value;

     
        if (mobileNumber.length !== 10) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        // Validation for age
        if (ageYears < 0 || (ageMonths && ageMonths < 0)) {
            alert("Age must be a positive number.");
            return;
        }

        alert("Your appointment is booked successfully!"); 
        event.target.reset(); 
    };

    return (
        <div>
            <div className="container mt-4">
                <h2>New Appointment</h2>
                <form id="appointmentForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobileNumber"
                            name="mobileNumber"
                            required
                            pattern="\d{10}" 
                            maxLength="10" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="patientName" className="form-label">Patient Name</label>
                        <input type="text" className="form-control" id="patientName" name="patientName" required />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ageYears" className="form-label">Age (Years)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="ageYears"
                                name="ageYears"
                                required
                                min="0" 
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ageMonths" className="form-label">Age (Months)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="ageMonths"
                                name="ageMonths"
                                min="0" 
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">DOB</label>
                        <input type="date" className="form-control" id="dob" name="dob" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-control" id="gender" name="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="areaCity" className="form-label">Area/City</label>
                        <input type="text" className="form-control" id="areaCity" name="areaCity" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
                        <input type="text" className="form-control" id="additionalInfo" name="additionalInfo" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" name="date" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input type="time" className="form-control" id="time" name="time" required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Appointment</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
