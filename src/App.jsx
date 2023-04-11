import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NewsletterPage from "./Pages/NewsletterPage";
import SignupPage from "./Pages/SignupPage";

const App = () => {
  const hello = "hello";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsletterPage />} />
        <Route path="/Newsletter" element={<NewsletterPage />} />
        <Route path="/Signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
