import React from "react";
import "./table.css";

function Table() {
  return (
    <div className="board">
      <div className="ball" id="ball"></div>
      <div className="paddle left" id="player-paddle"></div>
      <div className="paddle right" id="bot-paddle"></div>
    </div>
  );
}

export default Table;
