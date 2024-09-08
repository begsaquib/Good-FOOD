import { Rescrd_Url } from "../utils/constants";
const Itemlist = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item?.card?.info?.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 10}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute w-full my-10">
              <button className="p-2 mx-8 bg-black text-white shadow-lg absolute m-auto rounded-xl hover:bg-slate-600">
                Add +
              </button>
            </div>
            <img
              className="w-full h-20 object-cover"
              src={Rescrd_Url + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
