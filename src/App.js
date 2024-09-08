import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorsList";
import ColorForm from "./ColorForm";
import ColorPage from "./ColorPage";
import './App.css';

function App() {
  const [colors, setColors ] = useState([]);

  // function to add a new color to the list
  const addColor = (newColor) => {
    // add new color to the top of the existing colors 
    setColors([newColor, ...colors]);
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors} />}/>
          <Route path="/colors/new" element={<ColorForm addColor={addColor} />}/>
          <Route path="/colors/:color" element={<ColorPage />}/>
          <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
