import { useState } from "react";
import Itemlist from "./Itemlist";

const ResCategory = ({ data, Showlist, setShowIndex }) => {
  const [up, setup] = useState("⬇️");

  const handleClicked = () => {
    setShowIndex();
    up === "⬇️" ? setup("⬆️") : setup("⬇️");
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClicked}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{up}</span>
        </div>

        {Showlist && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResCategory;
