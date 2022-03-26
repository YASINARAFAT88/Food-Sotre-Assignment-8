import React from 'react';
import './FoodCart.css'

const FoodCart = (props) => {
    const {name, price, picture} = props.food;
    return (
        <div className='cart'>
            <img className='food-img' src={picture} alt="" />
        <div className='cart-info'>
        <h2>{name}</h2>
            <h2>Price ${price}</h2>
        </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default FoodCart;