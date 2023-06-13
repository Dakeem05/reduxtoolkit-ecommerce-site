import React from 'react'
import "../../src/final/src/index.css"
import { clearCart } from '../features/cart/cartSlice'
import {closeModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
export const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>remove all items you shopping cart</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" type='button' onClick={()=> {
                    dispatch(clearCart());
                    dispatch(closeModal())
                    }}>confirm</button>
                <button className="btn clear-btn" type='button' onClick={()=>dispatch(closeModal())}>cancel</button>
            </div>
        </div>
    </aside>
  )
}
