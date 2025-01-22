import React from 'react';

const CarAvailability = ({ model, available }) => {
    return (
        <div className="car-availability">
            <h2>{model}</h2>
            <p>Status: {available ? 'Available' : 'Not Available'}</p>
        </div>
    );
};

export default CarAvailability;