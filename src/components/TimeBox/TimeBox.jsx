import React from "react";

function TimeBox({time}){
  return (
    <div>
      <p style={{
        color: "#2AA8FF",
        border:"1.5px solid #2AA8FF",
        padding: "1px",
        borderRadius: "3px",
        fontSize: "0.9rem",
        cursor: "pointer"
      }}>{time}</p>
    </div>
  )
}

export default TimeBox;