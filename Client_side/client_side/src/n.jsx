import React, { useState } from 'react';

const BookApp = () => {
  const [city, setCity] = useState('');
  const [slots, setSlots] = useState([]);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    if (selectedCity) {
      setSlots([
        { date: '2024-09-20', time: '10:00 AM', availability: 'Available' },
        { date: '2024-09-21', time: '02:00 PM', availability: 'Available' },
      ]);
    } else {
      setSlots([]);
    }
  };

  const openBookingPage = (date, time) => {
    const bookingHtml = `
      <h2>Booking Appointment</h2>
      <p>You are booking an appointment in ${city} on ${date} at ${time}.</p>
      <button onclick="window.close()" class="btn btn-secondary">Close</button>
    `;
    const bookingWindow = window.open('', '_blank');
    bookingWindow.document.write(bookingHtml);
    bookingWindow.document.close();
  };

  return (
    <div className="container mt-5">
      <h2>Select City</h2>
      <select
        id="citySelect"
        className="form-select"
        aria-label="Select City"
        onChange={handleCityChange}
      >
        <option value="">Select City</option>
        <option value="Navi Mumbai">Navi Mumbai</option>
        <option value="Dadar">Dadar</option>
        <option value="Pamnvel">Pamnvel</option>
        <option value="Thane">Thane</option>
        <option value="Kalyan-Dombivali">Kalyan-Dombivali</option>
        <option value="Ulhasnagar">Ulhasnagar</option>
        <option value="Vasai-Virar">Vasai-Virar</option>
      </select>
      <div id="tableContainer" className="mt-4">
        {slots.length > 0 ? (
          <>
            <h3>Available Slots in {city}</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Availability</th>
                  <th scope="col">Appointment</th>
                </tr>
              </thead>
              <tbody>
                {slots.map((slot, index) => (
                  <tr key={index}>
                    <td>{slot.date}</td>
                    <td>{slot.time}</td>
                    <td>{slot.availability}</td>
                    <td>
                      <button
                        type="button"
                        className="btn"
                        style={{
                          backgroundColor: '#ff69b4',
                          color: '#fff',
                          borderColor: '#ff69b4',
                          marginBottom: '10px',
                        }}
                        onClick={() => openBookingPage(slot.date, slot.time)}
                      >
                        Book Appointment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>Please select a city to view available slots.</p>
        )}
      </div>
    </div>
  );
};

export default BookApp;
