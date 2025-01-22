import { Component } from 'react';
import data from "../../commonResource/data";

class Main extends Component {
    render() {
        return (
            <div className="foods-container">
                {data.slice(0, 3).map((food) => (
                    <div className="single-food" key={food.id}>
                        <div className="img">
                            <img src={food.img} alt={food.title || 'Food Item'} />
                        </div>
                        <div className="title-price">
                            <h3>{food.title}</h3>
                            <p>{food.price}</p>
                        </div>
                        <div className="food-desc">{food.desc}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Main;
