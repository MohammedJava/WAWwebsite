import React, { useState } from "react";
import { Grid, TextField, Button, Paper, Typography } from "@mui/material";
import travel from "../Images/travel 1.png";
import Navbar from "../Navbar/Navbar";
import Signup from "../Sign up/Signup";
import Footer from "../Footer/Footer";

const SignupPage = () => (
  <div>
    <Navbar />
    <Grid container component="main" style={{ height: "90vh" }}>
      <Grid item xs={false} sm={5} md={6}>
        <img src={travel} alt="Logo" width="103%" />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div>
          <Signup />
        </div>
      </Grid>
    </Grid>
    <Footer />
  </div>
);

export default SignupPage;
