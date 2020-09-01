import React, { useContext } from "react";
import { InitContext } from "../contexts/InitContext";
import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
    const { photos } = useContext(InitContext);
    
    const images = photos.map((photo, idx) => (
        <Image
            key={ photo.id } 
            img={ photo } 
            className={ getClass(idx) } 
        />
    ))
    
    return (
        <main className="photos">
            { images }
        </main>
    )
}

export default Photos;