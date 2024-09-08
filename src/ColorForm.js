import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

/**
 * color form to add a new color rendered at /colors/new
 */

const ColorForm = ({ addColor }) => {
    // initial color 
    const [formData, setFormData] = useState({ color: "#000000" });
    const navigate = useNavigate();

    //handling the form inputs 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // pass the new color to the parent component 
        addColor(formData.color);
        // redirect to the colors list page 
        navigate('/colors')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    id="color"
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}/>
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default ColorForm;