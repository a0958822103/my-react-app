import React from "react";
import "./ClearButton.css";

export const ClearButton = ({val}) => (
  <div className="clear-btn" onClick={val=""}>
  </div>
);
