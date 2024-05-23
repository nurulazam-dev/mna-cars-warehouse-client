import { useEffect, useState } from "react";

const useItem = (itemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://mna-cars-warehouse-server.onrender.com/item/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item];
};

export default useItem;
