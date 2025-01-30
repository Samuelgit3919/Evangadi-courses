import React, { useState } from 'react';

const IncreaseDecreaseCount = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center mt-4">
            <h1 className="text-2xl mb-4">Count: {count}</h1>
            <div>
                <button 
                    onClick={increaseCount} 
                    className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded mr-2"
                >
                    Increase
                </button>
                <button 
                    onClick={decreaseCount} 
                    className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded"
                >
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default IncreaseDecreaseCount;
