import React from "react";
import Poster from "../../components/poster";
import Header from "../../components/header";
import "../../scss/style.scss";
import { Trends, WhoFollow } from "../../components/section";
import NewPost from "../../components/newPost";

export default function Home() {
  return (
    <div>
      <Header home="selected" />
      
      <div className="container home">
        <NewPost />
        <Poster />
        <Poster />

        <aside>
          <Trends />
          <WhoFollow />
        </aside>
      </div>
    </div>
  );
}
