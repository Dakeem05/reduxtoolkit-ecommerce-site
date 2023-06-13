import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../src/final/src/index.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar  } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { Modal } from "./components/Modal";
function App() {
  const {cartItems, isLoading} = useSelector((store)=>(store.cart))
  const {isOpen} = useSelector((store)=>(store.modal))
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  useEffect(()=>{
    dispatch(calculateTotal())
  }, [cartItems])

  if(isLoading){
    <return className="loading">
      <h1>Loading...</h1>
    </return>
  }
  return (
    <main>
      {isOpen &&(

      <Modal/>
      )}
      <Navbar/>
      <CartContainer/>
  </main>
  )
}

export default App



{/* <form action="submit">
  <input type="text" placeholder='Your name' />
  <input type="email" placeholder='your email' />
  <button><Link to="/home">Submit</Link></button>
</form> */}