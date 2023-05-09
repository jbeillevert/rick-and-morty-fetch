import React from "react";
import { NavLink } from "react-router-dom";

function RickAndMortyCard({ id, name, img }) {





    

    return (
        <li className="rick-and-morty-card">
            <NavLink to={`/character/${id}`}>
                <img src={img} alt="" />
                <p>{name}</p>
            </NavLink>
        </li>
    )
}

export default RickAndMortyCard;