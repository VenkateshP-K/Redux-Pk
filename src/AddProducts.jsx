import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct as addProductAction } from './Slices/productSlice';
import Products from './Products';

function AddProducts() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    function addProduct(e) {
        e.preventDefault();  // Prevent the default form submission
        const product = { name, price };

        if (!name || !price) {
            alert('Please enter name and price');
        } else {
            dispatch(addProductAction(product));
            setName('');  // Reset form fields
            setPrice('');
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card-header">
                            <h3>Add Product</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={addProduct}>
                                <div className="mb-3">
                                    <label className="form-label">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProducts;