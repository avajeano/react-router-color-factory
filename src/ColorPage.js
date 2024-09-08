import React from "react";
import { useParams, Link } from "react-router-dom";

const ColorPage = () => {
    // get the color from the url parameters 
    const { color } = useParams();

    // decode the hex color (e.g., "%23ff0000" -> "#ff0000")
    const decodedColor = decodeURIComponent(color);

    // set the background color of the page to the selected color
    const pageStyle = {
        backgroundColor: decodedColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
    };

    return (
        <div style={pageStyle}>
            <h1 style={{color: "white"}}>{color}</h1>
            <Link to="/colors">Go back to the color list</Link>
        </div>
    );
}

export default ColorPage;