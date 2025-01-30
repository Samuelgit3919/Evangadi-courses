// import React from 'react';
import ChildComponent from './ChildComponent';
import foodData from './data';
import ''

const App = () => {

  return (
    <div>
      {foodData.map((food) => (
        <ChildComponent key={food.id} food={food} />
      ))}
    </div>
  );
};

export default App;
