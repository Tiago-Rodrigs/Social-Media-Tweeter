import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import {Login} from "./pages/login&register";
import Explore from "./pages/explore";
import Bookmark from "./pages/bookmark";
import Settings from "./pages/settings";
import "./Global.scss";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={ <Settings/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
