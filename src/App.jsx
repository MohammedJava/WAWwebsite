import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NewsletterPage from "./Pages/NewsletterPage";

const App = () => {
  const hello = "hello";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsletterPage />} />
        <Route path="/Newsletter" element={<NewsletterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
