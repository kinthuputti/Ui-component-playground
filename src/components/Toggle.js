import React, { useState } from "react";

const Toggle = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={() => setChecked(!checked)} 
        />
        {label}
      </label>
      <p>Status: {checked ? "On" : "Off"}</p>
    </div>
  );
};

export default Toggle;