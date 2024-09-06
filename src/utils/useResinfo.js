import { useEffect, useState } from "react";
import { Menu_Url } from "./constants";

const useResinfo = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_Url + resId);

    const json = await data.json();

    setresInfo(json.data);
  };
  return resInfo;
};
export default useResinfo;
