import React from 'react';

const Cart = (cart) => {
    console.log(cart)
    return (
        <div>
            <h2>Oreder Summary</h2>
            <h4>Selected item {cart.cart.length}</h4>
        </div>
    );
};

export default Cart;