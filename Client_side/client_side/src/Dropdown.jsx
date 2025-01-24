import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Dropdown = () => {
    return (
        <div >
            <h1 style={{display:'flex', justifyContent:'center'}}> Available Slots</h1>
            <table className="table table-primary" style={{marginTop:'50PX'}}>
                <thead>
                    <tr>
                        <th>Available Days</th>
                        <th>Name of Clinic</th>
                        <th>Address</th>
                        <th>Doctor Available</th>
                        <th>Timing</th>
                        <th>Book appointment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>Clinic A</td>
                        <td>Address A</td>
                        <td>Yes</td>
                        <td>10am-2pm</td>
                        <td>
                            <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: '#ff69b4', color: '#fff', borderColor: '#ff69b4', marginBottom: '10px' }}
                            >
                                <Link to={'/Form'} style={{ color: 'white', textDecoration: 'none' }}>Book Appointment</Link>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td> Tuesday</td>
                        <td>Clinic B</td>
                        <td>Address B</td>
                        <td>Yes</td>
                        <td>12am-4pm</td>
                        <td>
                            <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: '#ff69b4', color: '#fff', borderColor: '#ff69b4', marginBottom: '10px' }}
                            >
                                <Link to={'/Form'} style={{ color: 'white', textDecoration: 'none' }}>Book Appointment</Link>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Wedday</td>
                        <td>Clinic C</td>
                        <td>Address C</td>
                        <td>Yes</td>
                        <td>9am-1pm</td>
                        <td>
                            <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: '#ff69b4', color: '#fff', borderColor: '#ff69b4', marginBottom: '10px' }}
                            >
                                <Link to={'/Form'} style={{ color: 'white', textDecoration: 'none' }}>Book Appointment</Link>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Clinic D</td>
                        <td>Address D</td>
                        <td>Yes</td>
                        <td>1am-4pm</td>
                        <td>
                            <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: '#ff69b4', color: '#fff', borderColor: '#ff69b4', marginBottom: '10px' }}
                            >
                                <Link to={'/Form'} style={{ color: 'white', textDecoration: 'none' }}>Book Appointment</Link>
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Dropdown;
