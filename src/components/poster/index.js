import React from "react";
import User from "../../assets/user.jpg";
import poster from "../../assets/poster.jpg";
import "../../scss/style.scss";

export default function Poster() {
  return (
    <div className="poster-container">
      <div className="user-info">
        <img src={User} alt="user name" />
        <div>
          <p>Peyton Lyons</p>
          <p>24 August at 20:43</p>
        </div>
      </div>

      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        dolore numquam atque nisi, voluptatibus distinctio fugiat perspiciatis
        ipsum autem voluptates debitis sed ab accusantium illum officiis quas
        eum beatae quo.
      </p>

      <img src={poster} alt="" className="image-poster" />

      <div className="likes-comments-container">
        <p>449 Comments</p>
        <p>59k Retweet</p>
        <p>234 Saved</p>
      </div>
      <hr />
      <div className="actions-poster-container">
        <li>
          <i class="fa-regular fa-message"></i>
          <p>Comment</p>
        </li>
        <li>
          <i class="fa-solid fa-rotate"></i>
          <p>Retweet</p>
        </li>
        <li>
          <i class="fa-regular fa-heart"></i>
          <p>Like</p>
        </li>
        <li>
          <i class="fa-regular fa-bookmark"></i>
          <p>Save</p>
        </li>
      </div>
      <hr />
      <div className="comment-container">
        <img src="https://picsum.photos/90" alt="" />
        <input type="text" placeholder="Tweet your reply" />
      </div>
    </div>
  );
}
