import React, { useState } from "react";

const Home = () => {
  const [lineStyle, setLineStyle] = useState({
    color: "black",
    thickness: 1,
    borderRadius: 0,
  });

  const handleColorChange = (e) => {
    setLineStyle({ ...lineStyle, color: e.target.value });
  };

  const handleThicknessChange = (e) => {
    setLineStyle({ ...lineStyle, thickness: Number(e.target.value) });
  };

  const handleBorderRadiusChange = (e) => {
    setLineStyle({ ...lineStyle, borderRadius: Number(e.target.value) });
  };

  return (
    <div className="line-component">
      <div className="color-input">
        <label htmlFor="colorInput">Line Color:</label>
        <input
          type="color"
          id="colorInput"
          value={lineStyle.color}
          onChange={handleColorChange}
        />
      </div>
      <div className="thickness-input">
        <label htmlFor="thicknessInput">Line Thickness:</label>
        <input
          type="range"
          id="thicknessInput"
          min="1"
          max="10"
          value={lineStyle.thickness}
          onChange={handleThicknessChange}
        />
        <span>{lineStyle.thickness}</span>
      </div>
      <div className="border-radius-input">
        <label htmlFor="borderRadiusInput">Border Radius:</label>
        <input
          type="range"
          id="borderRadiusInput"
          min="0"
          max="50"
          value={lineStyle.borderRadius}
          onChange={handleBorderRadiusChange}
        />
        <span>{lineStyle.borderRadius}</span>
      </div>
      <hr
        className="line"
        style={{
          backgroundColor: lineStyle.color,
          height: lineStyle.thickness,
          borderRadius: `${lineStyle.borderRadius}px`,
        }}
      />
    </div>
  );
};

export default Home;
