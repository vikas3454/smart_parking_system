import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SlotBookingPage.css';

const SlotBookingPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate(); // Use navigate for navigation

  const locations = [
    { name: 'GITAM Bengaluru', id: 1, vacant: 15, occupied: 5, reserved: 10 },
    { name: 'GITAM Hyderabad', id: 2, vacant: 10, occupied: 8, reserved: 12 },
    { name: 'GITAM Vizag', id: 3, vacant: 20, occupied: 2, reserved: 8 }
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    navigate(`/slot-details/${location.id}`, { state: location }); // Navigate to slot details page and pass location state
  };

  return (
    <div className="slot-booking-page">
      <h2>Select your location for slot booking</h2>
      <div className="locations-list">
        {locations.map((location) => (
          <div
            key={location.id}
            className={`location-card ${selectedLocation === location ? 'selected' : ''}`}
            onClick={() => handleLocationSelect(location)}
          >
            <h3>{location.name}</h3>
            <div className="slot-info">
              <div className="slot-field">
                <strong>No. of Slots Vacant:</strong> {location.vacant}
              </div>
              <div className="slot-field">
                <strong>Occupied:</strong> {location.occupied}
              </div>
              <div className="slot-field">
                <strong>Reserved:</strong> {location.reserved}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedLocation && (
        <div className="location-info">
          <h3>You selected: {selectedLocation.name}</h3>
        </div>
      )}
    </div>
  );
};

export default SlotBookingPage;
