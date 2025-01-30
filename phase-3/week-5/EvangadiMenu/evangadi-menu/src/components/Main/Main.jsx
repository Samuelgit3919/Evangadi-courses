

const Main = (food) => {
    // console.log(food);

    return (
        <div>
            <div className="single-food">
                <div className="img">
                    <img src={food.img} alt={food.title} />
                </div>
                <div className="title-price">
                    <h3>{food.title}</h3>
                    <p>{food.price}</p>
                </div>
                <div className="food-desc">{food.desc}</div>
            </div>
        </div>
    );
}


export default Main;
