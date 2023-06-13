import React from 'react'
import {ChevronDown, ChevronUp} from  "../../src/final/src/icons";
import { removeItem, decrease, increase } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
export const Cartitem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={()=>{
          dispatch(removeItem(id))
        }}>remove</button>
      </div>
        <div className="">
          <button className="amount-btn" onClick={()=>{
            dispatch(increase({id}))
          }}>
            <ChevronUp/>
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={()=>{
            if (amount === 1){
              dispatch(removeItem(id))
            } else{

              dispatch(decrease({id}))
            }
          }}>
            <ChevronDown/>
          </button>
        </div>
    </article>
  )
}
