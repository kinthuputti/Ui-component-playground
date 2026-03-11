import { useState } from "react";

function Tabs() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <button onClick={() => setActive(1)}>Tab 1</button>
      <button onClick={() => setActive(2)}>Tab 2</button>

      {active === 1 && <p>Content of Tab 1</p>}
      {active === 2 && <p>Content of Tab 2</p>}
    </div>
  );
}

export default Tabs;