import { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import logo from './icon.jpg'
import './Food.css'

const Food = () => {
    const [foods, setFood] = useState([]);
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    
    const handleClick = (food) =>{
        // console.log(food)
        const newCart = [...cart, food];
        if(newCart.length > 4){
            alert('do not click plz...')
        }else{
            setCart(newCart)
        }
        
    }

    function randomName (random) {
         const cart = random[Math.floor((Math.random()*random.length))];
            return cart
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
                <img className='icon' src={logo} alt="" />
              
               {
                   cart.map(item => <h3 className='food-name' key={item.id}>Name: {item.name}</h3>)
               }
               <button onClick={()=> randomName()}  className='btn-choose'>Choose 1 for me</button> <br />
               <button onClick={() => setCart([])} className='btn-try'>try Again</button>
               <h1>{}</h1>
               
            </div>
        </div>
    );
};

export default Food;