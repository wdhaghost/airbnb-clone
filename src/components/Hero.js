import React from "react";
import grid from "../images/photos-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} alt="photos grid" className="hero-pic"></img>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}