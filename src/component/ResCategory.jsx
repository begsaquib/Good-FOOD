import Itemlist from "./Itemlist";

const ResCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg flex justify-between ">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
      </div>
      <Itemlist items={data.itemCards} />
    </div>
  );
};
export default ResCategory;