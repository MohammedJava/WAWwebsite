import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import "./Newsletter.css";

const Newsletter = () => {
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    if (email.includes("@")) {
      if (!emails || !emails.includes(email)) {
        emails.push(email);
        localStorage.setItem("emails", JSON.stringify(emails));
        setAlert(true);
        setAlertSeverity("success");
        setAlertContent("Successfully registered");
      } else {
        setAlert(true);
        setAlertSeverity("error");
        setAlertContent("Email already registered");
      }
    } else {
      setAlert(true);
      setAlertSeverity("warning");
      setAlertContent("Not a valid email address");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="App"
    >
      {alert ? (
        <Alert style={{ width: 500 }} severity={alertSeverity}>
          {alertContent}
        </Alert>
      ) : (
        <> </>
      )}
      <span style={{ fontSize: 40, fontWeight: "bolder", marginBottom: 30 }}>
        NEWSLETTER SIGNUP <br />
      </span>
      <span style={{ fontSize: 15, fontWeight: "bold" }}>
        Sign up for the Weekend All Week newsletter! <br />
      </span>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter your email address"
          variant="outlined"
          style={{ width: 500, marginTop: 10, borderColor: "#C10C99" }}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          style={{ width: 500, marginTop: 10, backgroundColor: "#C10C99" }}
        >
          Sign me up!
        </Button>
      </form>
      <Accordion style={{ width: 500 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span style={{ fontWeight: "bold" }}>Exclusive Deals</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            By signing up to the Weekend All Week newsletter, you will receive
            updates on exclusive travel deals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Newsletter;
