import React from "react";


export default function Card(props) {
    return (
        <div className="card">
            <img src={`src/images/${props.cover}`} className="card--image" />
            <div className="card--stats">
                <img src="src/images/star.png" className="card--star"/>
                <span>{props.rating} </span>
                <span className="grey"> ({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span>/ person</p>
        </div>
    )
}