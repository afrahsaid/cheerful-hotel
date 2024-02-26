import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImg from '../images/room-1.jpeg';
import PropTypes from "prop-types";


const Room=({room})=>{
        const scrollToTop = () => {
            window.scrollTo(0, 0)
        }

     const {images, slug, price, name}= room;
    return(
        <article className="room">
            < div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"></img>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link   onClick={scrollToTop}  to={`/rooms/${slug}`}   className="btn-primary room-link">                    
                    Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>

    );
}

export default  Room;
Room.propTypes = { 
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired

    })
};

