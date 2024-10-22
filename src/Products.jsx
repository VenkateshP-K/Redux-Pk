import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from './Slices/productSlice'

function Products() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    function handleRemoveProduct(index) {
        dispatch(removeProduct(index))
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        {
                            products.map((product, index) => {
                                return (
                                    <div className="card" style={{ width: "18rem" }} key={index}>
                                        <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <h3>Rs : {product.price}</h3>
                                            <button  onClick={() => handleRemoveProduct(index)} className="btn btn-primary">Remove Product</button>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products