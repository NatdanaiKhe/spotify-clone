import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import './layout.css';
import SideBar from "./SideBar";
import Player from "../components/Player";

function MainLayout() {
  const themeContext = useContext(ThemeContext);
  
  const mainLayoutStyle = {
    color: themeContext?.white,
    gap: themeContext?.gap,
  }
  
  return (
    <div className="main-layout" style={mainLayoutStyle}>
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="main-view">
        <Outlet />
      </div>
      <div className="now-playing">
        <footer>
          <Player />  
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
