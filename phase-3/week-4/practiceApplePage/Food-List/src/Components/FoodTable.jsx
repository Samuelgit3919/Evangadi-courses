// import React from 'react'

const FoodTable = ({ text, foodName }) => {


    return (
        <div className="flex justify-center items-center">
            <h1>{text}</h1>
            <h3>{foodName}</h3>
        </div>
    )
}

export default FoodTable