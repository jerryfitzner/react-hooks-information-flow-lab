import React, { useState } from "react";

function Header({ onDarkModeClick, textColor }) {
  return (
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {textColor ? "Light" : "Dark"} Mode
        </button>
      </header>
  );
}

export default Header;
