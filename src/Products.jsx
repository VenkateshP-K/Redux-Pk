import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from './Slices/productSlice';
import { addToCart, removeFromCart } from './Slices/cartSlice';

function Products() {
    // Corrected selectors to access state directly as configured in `store.js`
    const products = useSelector((state) => state.products || []);
    const cart = useSelector((state) => state.cart || []);
    const dispatch = useDispatch();

    function handleCartToggle(product) {
        const isInCart = cart.some((item) => item.name === product.name);
        if (isInCart) {
            dispatch(removeFromCart(product));
        } else {
            dispatch(addToCart(product));
        }
    }

    return (
        <div className="container mt-5 ">
            <div className="row">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <div className="card" style={{ width: "18rem", padding:"10px"}}>
                                <img src="https://picsum.photos/200/200" className="card-img-top" alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <h3>Rs : {product.price}</h3>
                                    <button
                                        onClick={() => handleCartToggle(product)}
                                        className={`btn ${cart.some((item) => item.name === product.name) ? 'btn-warning' : 'btn-primary'}`}
                                    >
                                        {cart.some((item) => item.name === product.name) ? 'Remove from Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
}

export default Products;