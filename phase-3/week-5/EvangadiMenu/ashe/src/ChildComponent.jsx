// import React from 'react';

const ChildComponent = ({ food }) => {
    return (
        <div>
            <h2>{food.name}</h2>
            <p>{food.description}</p>
        </div>
    );
};

export default ChildComponent;
