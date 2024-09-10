import { Logo_Url } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinetstatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlinestatus = useOnlinetstatus();
  const [btnNameReact, setbtnNameReact] = useState(" Login ");
   const {loggedInuser}=useContext(UserContext)
    
   const cartItems =useSelector((store)=> store.cart.items)

   console.log(cartItems)
    
  return (
    <div className="flex justify-between shadow-xl bg-pink-300">
      <div className="">
      <Link to="/"><img className="w-28 h-28" src={Logo_Url} /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex  m-3 justify-center">
          <li className="p-3"> online status:{onlinestatus ? "✅" : "🔴"} </li>
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="p-3">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="p-3">
            <Link to="/About">About us</Link>
          </li>
          <li className="p-3 font-bold text-xl"> 
          <Link to="/Cart"> 🛒 ({cartItems.length} items)</Link>
            </li>  
          <button 
            className="p-2 border-solid bg-slate-300 rounded-xl"
            onClick={() => {
              btnNameReact === "Login "
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login ");
            }}
          >
            {btnNameReact}
          </button>
          <li className="p-3 font-bold">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
