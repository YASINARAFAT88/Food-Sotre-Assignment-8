import { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import './Food.css'

const Food = () => {
    const [foods, setFood] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    
    const handleClick = (food) =>{
        console.log(food)
        const newCart = [...cart, food];
        setCart(newCart)
    }
    return (
        <div className="food-container">
            <div className="food-cart">
                {
                    foods.map(food => <FoodCart
                    key={food.id} food={food}
                    handleClick={handleClick}
                    ></FoodCart>)
                }
            </div>
            <div className="cart-detail">
               {
                   cart.map(item => <h3 key={item.id}>Name: {item.name}</h3>)
               }
            </div>
        </div>
    );
};

export default Food;