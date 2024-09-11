import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import useNewReslist from "../utils/useNewReslist";
import useOnlinetstatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const newreslist = useNewReslist();

  const [filteredrestraunt, setfilteredrestraunt] = useState([]);
  const handleSearch = () => {
    const filteredres = newreslist.filter(
      (res) =>
        res.info.name
          .toLowerCase()
          .includes(Searchtext.current.value.trim().toLowerCase()) ||
        res.info.cuisines
          .join(",")
          .toLowerCase()
          .includes(Searchtext.current.value.trim().toLowerCase())
    );
    setfilteredrestraunt(filteredres);
  };

  useEffect(() => {
    if (newreslist.length) {
      setfilteredrestraunt(newreslist);
    }
  }, [newreslist.length]);

  const Searchtext = useRef(null);

  const onlinestatus = useOnlinetstatus();
  if (onlinestatus === false)
    return (
      <h1>
        Seems like there is a network issue.....Check your Internet connection
        and try again..
      </h1>
    );
  const { loggedInuser, setUserName } = useContext(UserContext);

  return newreslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className=" m-4 p-4  ">
          <input
            ref={Searchtext}
            type="text"
            className="border border-solid border-black p-2"
            // Detect Enter key press 
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="bg-slate-300 rounded-md px-4 py-2 ml-2 hover:bg-slate-500"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className=" p-4 flex items-center ">
          <button
            className="filter-btn bg-slate-300 rounded-md px-4 py-2 hover:bg-slate-500"
            onClick={() => {
              const filteredlist = newreslist.filter((res) => {
                return res.info.avgRating > 4.3;
              });
              setfilteredrestraunt(filteredlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className=" p-4 flex items-center ">
          <label>UserName: </label>
          <input
            className="border border-black p-2"
            value={loggedInuser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap m-6">
        {filteredrestraunt.map((Res) => (
          <Link key={Res.info.id} to={"/restaurants/" + Res.info.id}>
            <RestaurantCard resData={Res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
