import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist";
import { clearItem} from "../utils/cartSlice";

const Cart=()=>{

const cartItems=useSelector((store)=>store.cart.items)

 const dispatch=useDispatch();
 const handledClearCart=()=>{
    dispatch(clearItem())
 }


    return (
    <div className="m-4 p-4 text-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button 
        className="bg-black text-white m-3 p-2 rounded-2xl hover:bg-gray-500"
        onClick={handledClearCart}
        >
           clear cart
         </button>
         {cartItems.length===0 && <h1 className="text-2xl font-bold">Add Some items, are you not Hungry?</h1>}
         <Itemlist items={cartItems}/>
        </div>
         

    </div>)
}
export default Cart