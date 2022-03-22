import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingelProduct.css'

const SingelProduct = (props) => {
    const {setCartCount} = props;
    console.log(props.product)
    return (
        <div data-aos="flip-left" className=' col-md-4  mb-3  p-3'>
           <div className="cart p-3 border h-100 p-3">
               <img className='w-50 m-auto h-75' src={props.product.image} alt="" />
           <h1>{props.product.title.slice(0,10)}</h1>
           <div className='d-flex justify-content-around'>
           <button onClick={setCartCount} className='btn btn-success'>add To Cart</button>
           {/* <button className='btn btn-info' >Detail</button> */}
           <button className='btn btn-danger'>Delate</button>
           <ReactModal product={props.product}></ReactModal>
           </div>
           </div>
        </div>
    );
};

export default SingelProduct;