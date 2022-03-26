import React from 'react';
import './FoodCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const FoodCart = (props) => {
    const {name, price, picture} = props.food;
    // console.log(props)
    return (
        <div className='cart'>
            <img className='food-img' src={picture} alt="" />
        <div className='cart-info'>
        <h2>{name}</h2>
            <h2>Price ${price}</h2>
        </div>
            <button onClick={()=>props.handleClick(props.food)} className='cart-btn' >
            Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default FoodCart;