import React from 'react';
import './App.css';
import CarAvailability from './components/CarAvailability';

const App = () => {
  const cars = [
    { id: 1, model: 'Toyota Camry', available: true },
    { id: 2, model: 'Honda Accord', available: false },
    { id: 3, model: 'Ford Mustang', available: true },
  ];

  return (
    <div className="App">
      <h1>Car Availability</h1>
      {cars.map(car => (
        <CarAvailability key={car.id} model={car.model} available={car.available} />
      ))}
    </div>
  );
};

export default App;