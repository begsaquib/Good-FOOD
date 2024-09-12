import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResinfo from "../utils/useresinfo";
import ResCategory from "./ResCategory";
import Shimmeritem from "./Shimmeritem";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResinfo(resId);
  const [ShowIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmeritem />;
  }
 

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl my-7">{name}</h1>
      <p className="text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
       
     
        return (
          <ResCategory
            key={category?.card?.card?.title}
           
            data={category?.card?.card}
            Showlist={index === ShowIndex ? true : false}
            setShowIndex={() => {
              index === ShowIndex ? setShowIndex("null") : setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
