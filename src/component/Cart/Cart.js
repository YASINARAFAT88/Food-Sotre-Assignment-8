import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    console.log(cart)
    return (
        <div className='cart'>
            <h2>Oreder Summary</h2>
            <h4>Selected item {cart.length}</h4>
            <h4>Total price: ${total}</h4>
            <h4>Total Shipping ${shipping}</h4>
            <h4>Tax ${tax}</h4>
            <h3>Grand Total: </h3>
        </div>
    );
};

export default Cart;