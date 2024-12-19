import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import './main.css';
import "./pages/landing/hero.css";
import "./pages/landing/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/resume/resume.css";
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";

import { BrowserRouter } from "react-router-dom";
// import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // registerServiceWorker();
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found in the HTML file.');
}
