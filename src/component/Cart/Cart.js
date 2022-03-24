import React from 'react';
import './Cart.css'
import logo from '../../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faDrum, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax;
    console.log(cart)
    return (
        <div className='cart'>
            <img className='logo' src={logo} alt="" />
            <h2>Oreder Summary</h2>
            <h4>Selected item {cart.length}</h4>
            <h4>Total price: ${total}</h4>
            <h4>Total Shipping ${shipping}</h4>
            <h4>Tax ${tax}</h4>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button className='place-order'>Place Order <FontAwesomeIcon icon={faShoppingCart} /></button>
             <br />
            <button className='delate-items'>Delate Items <FontAwesomeIcon icon={faDotCircle} /></button>
        </div>
        
    );
};

export default Cart;