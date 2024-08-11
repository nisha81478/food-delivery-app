import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext(null);
const StorecontextProvider = (props) => {
  const [cartItem, setcartItem] = useState({});
  const addtocart = (itemId) => {
    if (!cartItem[itemId]) {
      setcartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removefromCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const gettotal = () => {
    let totalamount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) 
        {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartItem[item];
       }

    }
    return totalamount;
  };
  const contextvalue = {
    food_list,
    cartItem,
    setcartItem,
    addtocart,
    removefromCart,
    gettotal
  };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};
export default StorecontextProvider;
