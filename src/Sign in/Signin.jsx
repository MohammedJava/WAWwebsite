import React, { useState } from "react";
import {
  Grid,
  Alert,
  TextField,
  Button,
  Paper,
  Typography,
} from "@mui/material";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setAlert(true);
      setAlertSeverity("error");
      setAlertContent("Please enter a valid email!");
    } else {
      setAlert(true);
      setAlertSeverity("success");
      setAlertContent("Successfully Logged In!");
    }
  };

  return (
    <div
      style={{
        margin: "80px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" align="left">
        Sign In
      </Typography>
      <div style={{ width: "100%", marginTop: "16px", textAlign: "center" }}>
        <Typography>
          If you don’t have an account <br /> You can{" "}
          <b style={{ color: "#C10C99" }}>Register here!</b>
        </Typography>
      </div>
      <form
        style={{ width: "100%", marginTop: "24px" }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "4px",
          }}
        >
          {alert ? (
            <Alert style={{ width: 500 }} severity={alertSeverity}>
              {alertContent}
            </Alert>
          ) : (
            <> </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "18px",
          }}
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: "#C10C99", fontWeight: "bold" },
            }}
            InputProps={{
              disableUnderline: false,
              style: { color: "black", fontWeight: "bold" },
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "18px",
          }}
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              style: { color: "#C10C99", fontWeight: "bold" },
            }}
            InputProps={{
              disableUnderline: false,
              style: { color: "black", fontWeight: "bold" },
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            paddingBottom: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" />
            <Typography
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Remember Me
            </Typography>
          </div>
          <Typography style={{ fontSize: "15px", color: "black" }}>
            Forgot Password?
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{
              backgroundColor: "#C10C99",
              borderRadius: "30px",
              width: "50%",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
