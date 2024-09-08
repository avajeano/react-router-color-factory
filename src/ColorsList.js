import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
    return (
        <div>
            <h1>Available Colors</h1>
            {colors.length === 0 ? 
                (<p>No colors added yet</p>) 
                : 
                (colors.map((color, idx) => (
                    <li key={idx} >
                        <Link to={`/colors/${encodeURIComponent(color)}`} style={{ color: color }}>{color}</Link>
                    </li>
                )))
            }
            <Link to="/colors/new">Add a new color</Link>
        </div>
    )
}

export default ColorList;