import { useState } from "react";

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3 onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {title}
      </h3>

      {open && <p>{content}</p>}
    </div>
  );
}

export default Accordion;