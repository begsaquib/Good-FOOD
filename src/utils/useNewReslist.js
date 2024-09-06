import { Api_Url, Logo_Url } from "./constants";
import { useState, useEffect } from "react";

const useNewReslist = () => {
  const [newreslist, setnewreslist] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(Api_Url);

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setnewreslist(restaurants);
  };

  return newreslist;
};

export default useNewReslist;
