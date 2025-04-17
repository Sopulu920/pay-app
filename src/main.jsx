import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/dependencies/bootstrap-5.2.0-dist/css/bootstrap.min.css"; // bootstrap
import "../src/assets/fonts/fontawesome-free-6.1.1-web/css/all.css"; // fontAwesome
import "./assets/css/App.css"; // custom 
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
