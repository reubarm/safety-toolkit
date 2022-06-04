import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Switch from "react-switch";
import { FaHeart, FaBars } from "react-icons/fa";
import Aside from "../Aside";
import "../styles/App.scss";
import "../styles/style.css";
import { AddToHomeScreen } from "react-pwa-add-to-homescreen";

export const Layout = ({ wrapperClass, menuDoc, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width > 1280 && setCollapsed(false);
    width < 1280 && setCollapsed(true);
    width < 768 && setCollapsed(false);
  }, [width]);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <AddToHomeScreen />
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />

      <main className="main">
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Header menuDoc={menuDoc} />
        {children}
        <Footer />
      </main>
    </div>
  );
};
