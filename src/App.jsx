import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SigninPage from "./Pages/SigninPage";
import NewsletterPage from "./Pages/NewsletterPage";
import SignupPage from "./Pages/SignupPage";

const App = () => {
  const hello = "hello";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/Newsletter" element={<NewsletterPage />} />
        <Route path="/Signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
