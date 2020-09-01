import React, { useContext } from "react";
import { InitContext } from "../contexts/InitContext";
import { Link } from "react-router-dom";

function Header () {
    const { cartItems } = useContext(InitContext);
    const cartClass = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart">
                <i className={`${cartClass} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header;