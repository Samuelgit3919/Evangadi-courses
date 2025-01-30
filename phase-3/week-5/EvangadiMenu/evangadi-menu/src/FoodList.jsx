// // import React from "react";
import data from "./commonResource/data";
import Main from "./components/Main/Main";

const FoodList = () => {
    return (
        <div className="foods-container">
            {data.slice(0, 3).map((food) => (
                <Main key={food.id} {...food} />
            ))}
        </div>
    );
};

export default FoodList;
