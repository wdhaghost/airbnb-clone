import React from "react";
import star from "../images/Star.png"

export default function Card(props) {
    let status

    if (props.openSpots === 0) {
        status = "SOLD OUT"
    }
    else if (props.location === "Online") {
        status = "ONLINE"

    }

    return (
        <div className="card">
            <img src={`../images/${props.coverImg}`} alt=" " className="card-pic"></img>
            {status && <span className="card-status">{status}</span>}
            <div className="card-rating">
                <img src={star} alt="star logo"></img>
                <p className="card-rate">{props.stats.rating}</p>
                <p className="card-review">({props.stats.reviewCount}) · {props.location}</p>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-info"><span className="card-info-price">From {props.price}$</span> / person</p>
        </div>)
}