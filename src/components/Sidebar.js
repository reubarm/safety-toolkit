import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaHeart, FaSmile, FaUserLock, FaPaperPlane, FaPaperclip, FaHouseUser } from "react-icons/fa";
import { MdHealthAndSafety, MdPerson } from "react-icons/md";
import { AiOutlineSafetyCertificate, AiFillSecurityScan, AiTwotoneCamera } from "react-icons/ai";

const Sidebar = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      style={{background: "#525f64"}}
    >
      <SidebarHeader style={{ textAlign: "center", background: "#525f64" }}>
        <a href="/">
          <img src="/android-chrome-512x512.png" style={{ margin: "20px auto", borderRadius: "50%" }} width="170" />
        </a>
      </SidebarHeader>

      <SidebarContent style={{ background: "#525f64", color: "#FFF" }}>
        <Menu>
          <MenuItem icon={<AiOutlineSafetyCertificate style={{fontSize: '24px'}}/>}><Link to="/digital-safety" />Digital Safety</MenuItem>
          <MenuItem icon={<MdHealthAndSafety style={{fontSize: '24px'}}/>}><Link to="/physical-safety" />Physical Safety</MenuItem>
          <MenuItem icon={<MdPerson style={{fontSize: '24px'}}/>}>Protected Characteristics<Link to="/protected-characteristics" /></MenuItem>
          <MenuItem icon={<AiFillSecurityScan style={{fontSize: '24px'}}/>}><Link to="/information-security" />Information Security</MenuItem>
          <MenuItem icon={<AiTwotoneCamera style={{fontSize: '24px'}}/>}><Link to="/photographers" />Photographers</MenuItem>
          <MenuItem icon={<FaUserLock style={{fontSize: '24px'}}/>}><Link to="/courts" />Courts</MenuItem>
          <MenuItem icon={<FaHouseUser style={{fontSize: '24px'}}/>}><Link to="/lawfare" />Lawfare/SLAPPS</MenuItem>
          <MenuItem icon={<FaPaperclip style={{fontSize: '24px'}}/>}><Link to="/right-to-report" />Right to Report</MenuItem>
          <MenuItem icon={<FaHeart style={{fontSize: '24px'}}/>}><Link to="/mental-health" />Mental Health</MenuItem>
          <MenuItem icon={<FaSmile style={{fontSize: '24px'}}/>}><Link to="/workplace-safety" />Workplace Safety</MenuItem>
          <SubMenu icon={<FaPaperPlane  style={{fontSize: '24px'}}/>} title="Resources"><Link to="/resources" />
            <MenuItem>Employer Responsibilities<Link to="/resources" /></MenuItem>
            <MenuItem>Equality<Link to="/resources" /></MenuItem>
            <MenuItem>Guidance for Workers<Link to="/resources" /></MenuItem>
            <MenuItem>Home Working<Link to="/resources" /></MenuItem>
            <MenuItem>Reporting Accidents and Injuries<Link to="/resources" /></MenuItem>
            <MenuItem>Risk Assessments<Link to="/resources" /></MenuItem>
            <MenuItem>Support from your Union<Link to="/resources" /></MenuItem>
            <MenuItem>Working Safely<Link to="/resources" /></MenuItem>
            <MenuItem>Coronavirus <Link to="/resources" /></MenuItem>
            <MenuItem>National Police Chiefs Council<Link to="/resources" /></MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center", background: "#525f64" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://www.nuj.org.uk/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                color: "#FFF",
                fontWeight: "900",
              }}
            >
              N U J
            </span>
          </a>
          <br />
          <a
            href="https://www.societyofeditors.org/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                color: "#FFF",
                fontWeight: "900",
              }}
            >
              Society of Editors
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
