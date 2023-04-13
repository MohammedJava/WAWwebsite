/* eslint-disable react/button-has-type */
import {
  AppBar,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [toggleMenu2, setToggleMenu2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(true);
  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleClickOpen = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [currentUser, setCurrentUser] = React.useState({
    userId: 0,
    firstName: "Alice",
    lastName: "Bob",
    email: "AB@Gmail.com",
    isLoggedIn: false,
  });

  const updateCurrentUser = (newUser) => {
    setCurrentUser(newUser);
  };

  const logOut = () => {
    setCurrentUser({ ...currentUser, isLoggedIn: false });
  };

  return (
    <div style={{ position: "sticky", top: 0 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" style={titleStyle}>
            <img src={logo} alt="Logo" width="30%" />
          </Typography>
          <Link href="/Signup" underline="none" style={{ color: "white" }}>
            <MenuItem style={menuItemStyle}>Sign Up</MenuItem>
          </Link>
          <MenuItem style={menuItemStyle}>Contact Us</MenuItem>
          <MenuItem
            style={menuItemStyle}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Services &#9662;
          </MenuItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Visa Center</MenuItem>
            <MenuItem onClick={handleClose}>Plan my Trip</MenuItem>
            <MenuItem onClick={handleClose}>Rentals</MenuItem>
            <MenuItem onClick={handleClose}>Forum and networking</MenuItem>
          </Menu>
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
