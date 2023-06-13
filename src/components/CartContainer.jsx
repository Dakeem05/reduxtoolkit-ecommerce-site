import React from 'react'
import { Cartitem } from './Cartitem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

export const CartContainer = () => {
    const dispatch = useDispatch();
    const {amount, total, cartItems} = useSelector((store)=>store.cart)

    if (amount < 1){
        return(
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className="cart">
        <header>
            <h2>your bag</h2>    
        </header>        
        <div >
            {cartItems.map((item)=>{
                return(
                    <Cartitem key={item.id} {...item}/>
                )
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">

            <h4>total <span>${total.toFixed(2)}</span></h4>
            </div>
            <button onClick={()=>{dispatch(openModal())}} className="btn clear-btn">clear cart </button>
        </footer>
    </section>
  )
}
