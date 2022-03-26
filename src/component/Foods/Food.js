import { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import './Food.css'

const Food = () => {
    const [foods, setFood] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    
    return (
        <div className="food-container">
            <div className="food-cart">
                {
                    foods.map(food => <FoodCart
                    key={food.id} food={food}
                    ></FoodCart>)
                }
            </div>
            <div className="cart-detail">
                <h2>detail</h2>
            </div>
        </div>
    );
};

export default Food;