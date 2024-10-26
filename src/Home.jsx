import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <nav className="navbar bg-body-border">
                <div className="container-fluid">
                    <a className="navbar-brand">PK</a>
                    <form className="d-flex">
                        <Link className="btn btn-outline-dark me-2" to="/Cart" aria-label="Search">Cart</Link>
                        <Link className="btn btn-outline-dark" to="/AddProducts">+Products</Link>
                    </form>
                </div>
            </nav>

            <Products />
        </>
    )
}

export default Home