import React, { useState } from "react";
import Button from "../button";
import User from "../../assets/user.jpg";
import "../../scss/style.scss";

export default function NewPost() {
  const [canSee, SetCansee] = useState("Everyone can reply");

  const handleImage = () => {
    alert("Image hanlder.");
  };

  const whoCanSee = (who) => {
    let modal = document.getElementById("modal-who-can-see");

    if (modal.classList.contains("modal-who-can-see")) {
      SetCansee(who);
      modal.className = "hide";
    } else {
      modal.className = "modal-who-can-see";
    }
  };

  return (
    <div className="new-post-container">
      <p>Tweet something</p>
      <hr />
      <div className="text-container">
        <img src={User} alt="User name" />
        <textarea name="text" placeholder="What's happening?"></textarea>
      </div>
      <div className="actions-container">
        <div className="actions">
          <i class="fa-regular fa-image" onClick={() => handleImage()}></i>
          <i class="fa-solid fa-earth-americas" onClick={() => whoCanSee()}></i>
          <p onClick={() => whoCanSee(canSee)}>{canSee}</p>

          {/* modal */}

          <div className="hide" id="modal-who-can-see">
            <h4>Who can reply?</h4>
            <p>Choose who can reply to this Tweet.</p>

            <li onClick={() => whoCanSee("Everyone can reply")}>
              <i class="fa-solid fa-earth-americas"></i>Everyone
            </li>
            <li onClick={() => whoCanSee("People you follow")}>
              <i class="fa-solid fa-user-group"></i>People you follow
            </li>
          </div>
        </div>
        <Button text="Tweet" />
      </div>
    </div>
  );
}
