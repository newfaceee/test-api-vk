import React from "react";

const Latitude = ({ onChange, value, label, type, min, max }) => {
  return (
    <div>
      <span>{label}</span>
      <p>
        Текущая {type}: {value}
      </p>
      <input
        type="range"
        min="-90"
        max="90"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Latitude;
