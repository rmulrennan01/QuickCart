import React from 'react'
import "./Carousel.css"; 
import Carousel_Item from "./Carousel_Item.js"; 


function Carousel() {

    return (
        <div className="carousel">
            <div className="carousel__items"> 
                <Carousel_Item pic={"https://static.thenounproject.com/png/2034632-200.png"} /> 
                <Carousel_Item pic={"https://static.thenounproject.com/png/2034632-200.png"} />
            </div> 
            <br/>       <br/> 
            <br/>       <br/> 
            <div className="carousel__control"> 
                <button className="arrow left"></button>
                <button className="arrow right"></button>
            </div> 
        </div>
    )
}

export default Carousel
