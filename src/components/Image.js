import React, { useState, useContext } from "react";
import { InitContext } from "../contexts/InitContext";
import useHover from "../hooks/useHover";

import PropTypes from 'prop-types';

function Image({ className, img }) {
    const [ hovered, ref ] = useHover();
    const { toggleIsFavorite, addImageToCart, cartItems, removeImageFromCart } = useContext(InitContext);

    const heartIcon = () => {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={ () => toggleIsFavorite(img.id) }></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={ () => toggleIsFavorite(img.id) }></i>
        }
    }

    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === img.id);
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={ () => removeImageFromCart(img.id) }></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={ () => addImageToCart(img) }></i>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            ref={ ref }
        >
            <img src={ img.url } className="image-grid" alt="Picture" />
            { heartIcon() }
            { cartIcon() }
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image;