import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SlotDetailsPage.css';

const SlotDetailsPage = () => {
  const { state: location } = useLocation();  // Get the location passed from previous page
  const navigate = useNavigate();

  const slots = [
    { name: 'S1', state: 1 },
    { name: 'S2', state: 0 },  // Available slot
    { name: 'S3', state: 2 },
    { name: 'S4', state: 0 },  // Available slot
  ];

  const getSlotColor = (state) => {
    switch (state) {
      case 0: return 'green';  // Available
      case 1: return 'grey';   // Reserved
      case 2: return 'red';    // Occupied
      default: return 'white';
    }
  };

  const handleSlotClick = (slot) => {
    if (slot.state === 0) {  // Only navigate to reservation page for available slots
      navigate('/reservation', { state: { slot, location } });
    }
  };

  return (
    <div className="slot-details-page">
      <div className="header">
        <h2>Slots for {location.name}</h2>
      </div>
      <div className="slots-container">
        {slots.map((slot, index) => (
          <div
            key={index}
            className="slot"
            style={{ backgroundColor: getSlotColor(slot.state) }}
            onClick={() => handleSlotClick(slot)}
          >
            <h3>{slot.name}</h3>
            <p>{slot.state === 0 ? 'Available' : slot.state === 1 ? 'Reserved' : 'Occupied'}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default SlotDetailsPage;
