import React from "react";
import Button from "../button";
import "../../scss/style.scss";

export default function Search() {
  return (
    <div className="search-container">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search" />
      <Button text="Search" />
    </div>
  );
}
