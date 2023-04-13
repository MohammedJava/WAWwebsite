import React, { useState } from "react";
import {
  Grid,
  Alert,
  TextField,
  Button,
  Paper,
  Typography,
  Link,
} from "@mui/material";

const Signup = () => {
  const registeredEmails = JSON.parse(localStorage.getItem("emails")) || [];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [membershipCode, setMembershipCode] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registeredEmails.includes(email)) {
      if (!email.includes("@")) {
        setAlert(true);
        setAlertSeverity("error");
        setAlertContent("Please enter a valid email!");
      } else if (password !== confirmPassword) {
        setAlert(true);
        setAlertSeverity("error");
        setAlertContent("Passwords do not match! Please try again.");
      } else if (!agreed) {
        setAlert(true);
        setAlertSeverity("warning");
        setAlertContent(
          "Please check the Terms and Conditions checkbox to continue!"
        );
      } else {
        setAlert(true);
        setAlertSeverity("success");
        setAlertContent("Successfully Registered!");
        registeredEmails.push(email);
        localStorage.setItem("emails", JSON.stringify(registeredEmails));
      }
    } else {
      setAlert(true);
      setAlertSeverity("error");
      setAlertContent(
        "There is already an account registered with that email, please sign in instead."
      );
    }
  };

  return (
    <div
      style={{
        margin: "30px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" align="left">
        Create An Account
      </Typography>
      <div style={{ width: "100%", marginTop: "16px", textAlign: "center" }}>
        <Typography>
          If you already have an account, you can{" "}
          <Link href="/Signin" underline="none" style={{ color: "white" }}>
            <b style={{ color: "#C10C99" }}>Login here!</b>
          </Link>
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
            <Alert style={{ width: "100%" }} severity={alertSeverity}>
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
            paddingBottom: "4px",
          }}
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            InputLabelProps={{
              style: { color: "#C10C99", fontWeight: "bold" },
            }}
            InputProps={{
              disableUnderline: false,
              style: { color: "black", fontWeight: "bold" },
            }}
          />
          <div style={{ margin: "1rem" }} />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          <div style={{ margin: "1rem" }} />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            paddingBottom: "8px",
          }}
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="membershipcode"
            label="Membership Code"
            style={{ width: "35%" }}
            placeholder="Membership Code"
            value={membershipCode}
            onChange={(e) => setMembershipCode(e.target.value)}
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
          }}
        >
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <Typography
            style={{ marginLeft: "12px", fontWeight: "bold", color: "#C10C99" }}
          >
            I have read and agreed to the Terms & Conditions and Privacy Policy
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
