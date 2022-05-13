import React from "react";
import Poster from "../../components/poster";
import Header from "../../components/header";
import { NavSection } from "../../components/section";

export default function Bookmark() {
  return (
    <div>
      <Header bookmarks="selected" />
      <div className="container explore">
        <aside>
          <NavSection options={["Tweets", "Replies", "Media", "Likes"]} />
        </aside>

        <Poster />
        <Poster />
      </div>
    </div>
  );
}
