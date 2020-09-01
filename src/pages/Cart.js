import React, { useContext,useState } from "react";

import { InitContext } from "../contexts/InitContext";
import CartItem from "../components/CartItem";

function Cart () {
    const { cartItems,  emptyCart} = useContext(InitContext);
    const [ buttonText, setButtonText] = useState("Place Order");
    const cartItemsLength = cartItems.length;
    const totalCost = cartItemsLength * 5.99;
    const totalCostLocaleString = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
    const cartItemsElements = cartItems.map((item) => {
        return <CartItem key={ item.id } item={ item } />
    })

    function placeOrderDisplay () {
        if ( cartItemsLength > 0 ) {
            return (
                <div className="order-button">
                    <button onClick={ placeOrder }>{ buttonText }</button>
                </div>
            )
        } else {
            return (
                <p>You have no items in your cart.</p>
            )
        }
    }

    function placeOrder () {
        setButtonText("Ordering...");
        setTimeout(() => {
            console.log("Order Placed");
            setButtonText("Place Order");
            emptyCart();
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            { cartItemsElements }
            <p className="total-cost">Total: { totalCostLocaleString }</p>
            { placeOrderDisplay() }
        </main>
    )
}

export default Cart;