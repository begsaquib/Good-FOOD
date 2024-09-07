import { Rescrd_Url } from "../utils/constants";
const Itemlist = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2  border-gray-300 border-b-2 text-left"
          >
            <img
              className="w-14"
              src={Rescrd_Url + item?.card?.info?.imageId}
            />
            <div className="py-2">
              <span>{item?.card?.info?.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
         
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
