import React, { useState } from "react";
import Button from "../button";
import User from "../../assets/user.jpg";
import "../../scss/style.scss";

export default function NewPost() {
  const [canSee, SetCansee] = useState("Everyone can reply");
  const [previewImage, SetpreviewImage] = useState("");

  const deleteImg = () => {
    const previewContainer = document.getElementById("container-img-uploaded");
    // hidding the img preview container
    previewContainer.className = "hide";
    SetpreviewImage("");
  };

  const handleImage = () => {
    const [file] = document.getElementById("file-input").files;
    const previewContainer = document.getElementById("container-img-uploaded");
    if (file) {
      // Creating a preview url
      let url = URL.createObjectURL(file);
      SetpreviewImage(url);
      // Displaying the img container
      previewContainer.className = "container-img-uploaded";
    }
  };

  const handlewhoCanSee = (who) => {
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

      <div id="container-img-uploaded" className="hide">
        <i
          class="fa-solid fa-times delete-image-icon"
          onClick={() => deleteImg()}
        ></i>

        <img src={previewImage} alt="" />
      </div>

      <div className="actions-container">
        <div className="actions">
          <label htmlFor="file-input">
            <i class="fa-regular fa-image" type="file" name="fileupload"></i>
          </label>
          <input
            id="file-input"
            accept="image/*"
            type="file"
            onChange={() => handleImage()}
          />
          {canSee === "Everyone can reply" ? (
            <>
              <i
                class="fa-solid fa-earth-americas"
                onClick={() => handlewhoCanSee()}
              ></i>
              <p onClick={() => handlewhoCanSee(canSee)}>{canSee}</p>
            </>
          ) : (
            <>
              <i
                class="fa-solid fa-user-group"
                onClick={() => handlewhoCanSee()}
              ></i>
              <p onClick={() => handlewhoCanSee(canSee)}>{canSee}</p>
            </>
          )}

          {/* modal */}

          <div className="hide" id="modal-who-can-see">
            <h4>Who can reply?</h4>
            <p>Choose who can reply to this Tweet.</p>

            <li onClick={() => handlewhoCanSee("Everyone can reply")}>
              <i class="fa-solid fa-earth-americas"></i>Everyone
            </li>
            <li onClick={() => handlewhoCanSee("People you follow")}>
              <i class="fa-solid fa-user-group"></i>People you follow
            </li>
          </div>
        </div>
        <Button text="Tweet" />
      </div>
    </div>
  );
}
