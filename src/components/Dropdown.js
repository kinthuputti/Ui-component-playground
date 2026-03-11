import { useState } from "react";

function Dropdown({ options }) {
  const [selected, setSelected] = useState("Select");

  return (
    <select onChange={(e) => setSelected(e.target.value)}>
      <option>Select</option>
      {options.map((opt, index) => (
        <option key={index}>{opt}</option>
      ))}
    </select>
  );
}

export default Dropdown;