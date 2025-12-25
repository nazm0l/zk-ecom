import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
