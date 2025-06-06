import React from "react";
import { useState } from "react";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`collapse${open ? " open" : ""}`}>
      <button className="collapse-toggle" onClick={() => setOpen(o => !o)}>
        {title} <span>{open ? "▲" : "▼"}</span>
      </button>
      <div className="collapse-content" style={{ display: open ? "block" : "none" }}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
