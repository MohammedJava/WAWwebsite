import React from "react";
import { AppBar, Link, Toolbar, Typography, MenuItem } from "@mui/material";
import logo from "../Images/logo 1.png";

const Navbar = () => {
  const appBarStyle = {
    backgroundColor: "#363636",
    color: "#fff",
    boxShadow: "none",
  };

  const titleStyle = {
    flexGrow: 1,
  };

  const menuItemStyle = {
    fontSize: "1rem",
    padding: "1rem",
  };

  return (
    <div style={{ position: "sticky", top: 0 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" style={titleStyle}>
            <img src={logo} alt="Logo" width="30%" />
          </Typography>
          <Link href="/Signup" underline="none" style={{ color: "white" }}>
            <MenuItem style={menuItemStyle}>Sign Up &#9662;</MenuItem>
          </Link>
          <MenuItem style={menuItemStyle}>Contact Us &#9662;</MenuItem>
          <MenuItem style={menuItemStyle}>Services &#9662;</MenuItem>
          <MenuItem style={menuItemStyle}>About Us</MenuItem>
          <Link href="/Newsletter" underline="none" style={{ color: "white" }}>
            <MenuItem style={menuItemStyle}>Newsletter</MenuItem>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
