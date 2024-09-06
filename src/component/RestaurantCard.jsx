import { Rescrd_Url } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop;
  {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
      resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
      <div className="p-2 m-4 w-[260px] bg-gray-100 rounded-lg shadow-lg  hover:scale-95 transition-transform hover:border-2 hover:border-green-400">
        <img
          className=" rounded-md w-[254px] h-[170px] object-cover"
          alt="waitt"
          src={Rescrd_Url + cloudinaryImageId}
        />
        <h3 className="font-bold pt-1 text-lg line-clamp-1">{name}</h3>

        <div className="flex space justify-between items-center">
          <span className=" p-2 font-bold bg-red-500  my-5 text-white  ">
            {"⭐" + avgRating}
          </span>
          <p>•</p>
          <p>{deliveryTime}mins </p>
          <p>•</p>
          <h5>{costForTwo}</h5>
        </div>
        <p className="line-clamp-1">{cuisines.join(", ")}</p>
      </div>
    );
  }
};

export default RestaurantCard;
