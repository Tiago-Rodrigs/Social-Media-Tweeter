import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../scss/style.scss";

export default function Modal(props) {
  const handleModal = () => {
    let modal = document.getElementById("large-modal");

    if (modal.classList.contains("modal")) {
      modal.className = "hide";
    } else {
      modal.className = "modal";
    }
  };

  return (
    <div className="modal" id="large-modal">
      <Link to="/">
        <i className="fa fa-times close-icon"></i>
      </Link>

      <div className="modal-container">{props.children}</div>
    </div>
  );
}
