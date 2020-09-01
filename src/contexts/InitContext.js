import React, { useState, useEffect } from "react";

const InitContext = React.createContext();

function InitContextProvider (props) {
    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    function toggleIsFavorite (id) {
        const updatedPhotos = photos.map(photo => {
            if (photo.id == id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo;
        })

        setPhotos(updatedPhotos);
    }

    function addImageToCart (ImageObject) {
        setCartItems(prevItems => [...prevItems, ImageObject]);
    }

    function removeImageFromCart (imageID) {
        const filteredArr = cartItems.filter(item => {
            return item.id !== imageID;
        })

        setCartItems(filteredArr);
    }

    function emptyCart () {
        setCartItems([]);
    }

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json');
                const jsonResponse = await response.json();
                setPhotos(jsonResponse);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPhotos();
    }, []);

    return (
        <InitContext.Provider value={{ 
            photos, 
            toggleIsFavorite, 
            addImageToCart, 
            removeImageFromCart, 
            cartItems,
            emptyCart
        }}>
            { props.children }
        </InitContext.Provider>
    )
}

export { InitContextProvider, InitContext } 