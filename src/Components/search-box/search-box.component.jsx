import React from "react";
import "./search-box.css";

export const SearchBox = ({ plcaeholder, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type="search"
      placeholder={plcaeholder}
    />
  );
};
