import { useSelector } from "react-redux";
// import {AiOutlineShopping} from "react-icons/ai"; 
import "../../src/final/src/index.css"
import {CartIcon} from  "../../src/final/src/icons"
export const Navbar = () =>{
    const {amount }= useSelector((store)=>(store.cart))
    return(
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon/>
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}