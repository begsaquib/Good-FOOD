import { Logo_Url } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinetstatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlinestatus = useOnlinetstatus();
  const [btnNameReact, setbtnNameReact] = useState(" Login ");
   const {loggedInuser}=useContext(UserContext)
   

  return (
    <div className="flex justify-between shadow-xl bg-pink-200">
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
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-3">Offers</li>
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
