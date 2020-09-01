import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { InitContext } from "../contexts/InitContext";
import useHover from "../hooks/useHover";

function CartItem ({ item }) {
    const { removeImageFromCart } = useContext(InitContext);
    const [ hovered, ref ] = useHover();

    return (
        <div className="cart-item">
            <i 
                className={ hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line" } 
                onClick={ () => removeImageFromCart(item.id) }
                ref={ ref }
            ></i>
            
            <img src={ item.url } width="130px" />
            <p><i>$5.99</i></p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem;