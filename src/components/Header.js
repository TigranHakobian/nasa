import React from 'react'
import {NavLink} from "react-router-dom";

export default function Header() {


    return (
        <header>
            <h1 className="title-nasa">NASA BROWSER </h1>
            <ul  className="header">

                <li>
                    <NavLink to="home"> HOME </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to="nearbyasteroids"> NEARBY ASTEROIDS </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to="astronomypictureoftheday"> ASTRONOMY PICTURE OF THE DAY </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to="newplanet"> SUBMIT NEW PLANET</NavLink>
                </li>
                <li className="languages">
                    <span>EN  </span>
                    <span>| РУ |</span>
                    <span> ՀՅ</span>
                </li>
            </ul>
        </header>
    )
}
