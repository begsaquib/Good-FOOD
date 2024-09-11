import { useState } from "react";
import Itemlist from "./Itemlist";

const ResCategory = ({ data, Showlist, setShowIndex }) => {
  const [up, setup] = useState("⬇️");

  const handleClicked = () => {
    setShowIndex();
    up === "⬇️" ? setup("⬆️") : setup("⬇️");
  };

  return (
    <div className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg  cursor-pointer ">
      <div className="flex justify-between  p-4" onClick={handleClicked}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{up}</span>
      </div>

      {Showlist && <Itemlist items={data.itemCards} isShowAddButton />}
    </div>
  );
};
export default ResCategory;
