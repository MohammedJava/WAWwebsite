import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./Footer.css";
import IconButton from "@mui/material/IconButton";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Linkedin from "@mui/icons-material/LinkedIn";

const Footer = () => (
  <Paper
    style={{
      marginTop: "20px",
      width: "100%",
      height: "7%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#363636",
    }}
    component="footer"
    square
    variant="outlined"
  >
    <div className="aParent">
      <div
        style={{
          color: "white",
          marginBottom: "3%",
          marginLeft: "1%",
          marginTop: "0.2%",
        }}
      >
        <span style={{ fontSize: "11pt" }}>
          © 2023 WeekendAllWeek <br /> All Rights Reserved
        </span>
      </div>
      <div
        style={{
          marginTop: "0.3%",
          marginRight: "1%",
          float: "right",
          display: "inline-block",
          fontFamily: "sans-serif",
        }}
      >
        <span>
          <Button style={{ color: "white" }} size="small">
            Privacy Policy
          </Button>
          <Button style={{ color: "white" }} size="small">
            Terms of Use
          </Button>
          <Button style={{ color: "white" }} size="small">
            Sales and Refunds
          </Button>
          <Button style={{ color: "white" }} size="small">
            Legal
          </Button>
          <Button style={{ color: "white" }} size="small">
            Site Map
          </Button>
          <IconButton
            style={{ color: "white", fontSize: 40 }}
            component={Facebook}
            inheritViewBox
          />
          <IconButton
            style={{ color: "white", fontSize: 40 }}
            component={Twitter}
            inheritViewBox
          />
          <IconButton
            style={{ color: "white", fontSize: 40 }}
            component={Instagram}
            inheritViewBox
          />
          <IconButton
            style={{ color: "white", fontSize: 40 }}
            component={Linkedin}
            inheritViewBox
          />
          <br />
        </span>
      </div>
    </div>
  </Paper>
);

export default Footer;
