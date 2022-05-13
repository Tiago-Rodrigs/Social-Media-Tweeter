import React from "react";
import Header from "../../components/header";
import Poster from "../../components/poster";
import "../../scss/style.scss";
import { NavSection } from "../../components/section";
import Search from "../../components/search";

export default function Explore() {
  return (
    <div>
      <Header explore="selected" />
      <div className="container explore">
      <Search />
        <aside>
          <NavSection options={["Top", "Lastest", "People", "Media"]} />
        </aside>
        
        <Poster />
        <Poster />
      </div>
    </div>
  );
}
