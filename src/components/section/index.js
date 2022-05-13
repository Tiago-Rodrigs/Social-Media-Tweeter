import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.jpg";
import "../../scss/style.scss";
import Button from "../button";

function NavSection(props) {
  let search = window.location.search;

  let q = search.replace("?q=", "");

  const [selected, setSelected] = useState(q);

  return (
    <section>
      <ul className="nav-section-container">
        {props.options.map((text) => {
          return text === selected ? (
            <Link
              to={`?q=${text}`}
              onClick={() => setSelected(text)}
              key={text}
            >
              <li className="active">{text}</li>
            </Link>
          ) : (
            <Link
              to={`?q=${text}`}
              onClick={() => setSelected(text)}
              key={text}
            >
              <li>{text}</li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
function Trends() {
  return (
    <section className="trends">
      <p>Trends for you</p>
      <hr />
      <strong>#devchallenges</strong>
      <p>123k Tweets</p>
      <strong>#programing</strong>
      <p>213k Tweets</p>
      <strong>#frontend</strong>
      <p>34k Tweets</p>
      <strong>#learncode</strong>
      <p>1k Tweets</p>
    </section>
  );
}
function WhoFollow() {
  return (
    <section>
      <p>Who to follow</p>
      <hr />
      <div className="user-info-container">
        <img src={user} alt="user name" />
        <div className="user-info">
          <p>Mikael Stanley</p>
          <p>230k followers</p>
        </div>
        <Button text="Follow" icon="fa-solid fa-user-plus" />
      </div>
      <div className="description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <img src="https://picsum.photos/400" alt="user cover" />
      </div>
      <hr />
      <div className="user-info-container">
        <img src="https://picsum.photos/310" alt="user name" />
        <div className="user-info">
          <p>Mikael Stanley</p>
          <p>230k followers</p>
        </div>
        <Button text="Follow" icon="fa-solid fa-user-plus" />
      </div>
      <div className="description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <img src="https://picsum.photos/300" alt="user cover" />
      </div>
      <hr />
    </section>
  );
}
export { NavSection, Trends, WhoFollow };
