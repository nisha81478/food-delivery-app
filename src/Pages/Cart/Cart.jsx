import React from "react";
import { useContext } from "react";
import { Storecontext } from "../../Context/Storecontext";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
const Cart = () => {
  const { food_list, cartItem, removefromCart,gettotal } = useContext(Storecontext);
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removefromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-Total</p>
              <p>{gettotal()}</p>
             
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delievery fee</p>
              <p>{2}</p>
            
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{gettotal()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate=('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-rpomo-code">
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
