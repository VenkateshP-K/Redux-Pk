import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './Slices/cartSlice';
import { FaRupeeSign } from "react-icons/fa";


function Cart() {
  const cart = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  // Calculate total amount with fallback for non-numeric prices
  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;  // Use 0 if price is NaN or undefined
    return total + price;
  }, 0);

  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <div className="row">
            {cart.map((item, index) => (
              <div className="list" key={index}><h4>{item.name}  : <FaRupeeSign /> {item.price}</h4>
                <button 
                  onClick={() => handleRemoveFromCart(item)}
                  className="btn btn-danger me-2"
                >
                  Remove from Cart
                </button></div>
            ))}
          </div>
          <div className="mt-4">
            <h4>Total: < FaRupeeSign />:{totalAmount.toFixed(2)}</h4>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart;