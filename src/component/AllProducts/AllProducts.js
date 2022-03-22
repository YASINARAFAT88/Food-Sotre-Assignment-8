import React, { useEffect, useState } from 'react';
import SingelProduct from '../SingelProduct/SingelProduct';
import './AllProducts.css'

const AllProducts = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    },[])
    console.log(products)
    return (
        <div>
            <h1>this is all product</h1>
            <div className="row container">
            {
                products.map((pd)=> (<SingelProduct key={pd.id} product={pd} setCartCount={setCartCount}></SingelProduct>))
            }
            </div>
        </div>
    );
};

export default AllProducts;