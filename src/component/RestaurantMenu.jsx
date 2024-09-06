import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResinfo from "../utils/useresinfo";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResinfo(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  
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
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl my-7">{name}</h1>
      <p className="text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category) => {
        return <ResCategory key={category?.card?.card?.id} data={category?.card?.card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
