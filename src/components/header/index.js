import { Link } from "react-router-dom";
import User from "../../assets/user.jpg";
import { Login } from "../../pages/login&register";
import "../../scss/style.scss";
import Modal from "../modal";

export default function Header(props) {
  const handleModal = () => {
    let modal = document.getElementById("modal");
    let arrow = document.getElementById("arrow");

    if (modal.classList.contains("modal-options-profile")) {
      modal.className = "hide";
      arrow.className = "fa-solid fa-angle-down";
    } else {
      modal.className = "modal-options-profile";
      arrow.className = "fa-solid fa-angle-up";
    }
  };

  return (
    <nav className="header-container">
      <Link to="/" className="logo-container">
        <div className="logo" />
      </Link>

      <ul className="header-links">
        <li id="home" className={props.home}>
          <Link to="/">Home</Link>
        </li>
        <li id="explore" className={props.explore}>
          <Link to="/explore?q=Top">Explore</Link>
        </li>
        <li id="bookmarks" className={props.bookmarks}>
          <Link to="/bookmarks?q=Tweets">Bookmarks</Link>
        </li>
      </ul>

      <ul className="header-links-mobile">
        <li id="home" className={props.home}>
          <Link to="/">
            <i class="fa-solid fa-house"></i>
          </Link>
        </li>
        <li id="explore" className={props.explore}>
          <Link to="/explore?q=Top">
            <i class="fa-solid fa-compass"></i>
          </Link>
        </li>
        <li id="bookmarks" className={props.bookmarks}>
          <Link to="/bookmarks?q=Tweets">
            <i class="fa-solid fa-bookmark"></i>
          </Link>
        </li>
      </ul>

      <div className="profile-section-header" onClick={() => handleModal()}>
        <img src={User} alt="user" />
        <p className="user-name">Tiago Rodrigues</p>
        <i class="fa-solid fa-angle-down" id="arrow"></i>

        <div className="hide" id="modal">
          <Link to="/profile?q=Tweets">
            <li>
              <i class="fa-solid fa-user"></i>My profile
            </li>
          </Link>
          <li>
            <i class="fa-solid fa-user-group"></i>Group Chat
          </li>
          <Link to="/profile/settings">
            <li>
              <i class="fa-solid fa-gear"></i>Settings
            </li>
          </Link>

          <hr />

          <Link to="/login">
            <li className="red">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>Logout
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
}
