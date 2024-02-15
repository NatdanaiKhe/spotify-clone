import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Card from "../components/Card";
import "./layout.css";
import HomeIcon from "../assets/icons/home.svg";
import BrowseIcon from "../assets/icons/browse.svg";
import ListIcon from "../assets/icons/Playlist.svg";

function SideBar() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="side-menu" style={{ gap: themeContext?.gap }}>
      <Card $height="112px">
        <ul className="side-menu-list">
          <li className="menu-list">
            <a className="list-item">
              <img src={HomeIcon} />
              <span>Home</span>
            </a>
          </li>
          <li className="menu-list">
            <a className="list-item">
              <img src={BrowseIcon} />
              <span>Search</span>
            </a>
          </li>
        </ul>
      </Card>
      <Card $height="120px" style={{flex:1}}>
        <ul className="side-menu-list">
          <li className="menu-list">
            <a className="list-item">
              <img src={ListIcon} />
              <span>Your Playlist</span>
            </a>
            </li>
          <li className="menu-list">
            <a className="list-item">
              <span>Playlist 1</span>
            </a>
          </li>
          <li className="menu-list">
            <a className="list-item">
              <span>Playlist 2</span>
            </a>
          </li>
          <li className="menu-list">
            <a className="list-item">
              <span>Playlist 3</span>
            </a>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default SideBar;
