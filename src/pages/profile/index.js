import React from "react";
import Button from "../../components/button";
import Header from "../../components/header";
import Poster from "../../components/poster";
import User from "../../assets/user.jpg";
import { NavSection } from "../../components/section";
import "../../scss/style.scss";

export default function Profile() {
  return (
    <div>
      <Header />
      <img
        src="https://picsum.photos/1000/400"
        alt=""
        className="background-image"
      />

      <div className="header-profile-container">
        <img src={User} alt="user name" className="user-image" />

        <div className="user-info">
          <h1>Tiago Rodrigues</h1>
          <strong>2,569</strong> <p>Following</p>
          <strong>10.80k</strong>
          <p> Followers</p>
          
        </div>

        <h2 className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et
          quibusdam est.
        </h2>
        <Button text="Follow" icon="fa-solid fa-user-plus" />
      </div>
      <div className="container explore">
        <aside>
          <NavSection options={["Tweets", "Replies", "Media", "Likes"]} />
        </aside>
        <Poster />
        <Poster />
        <Poster />
      </div>
    </div>
  );
}
