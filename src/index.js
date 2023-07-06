import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.webp";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ background: "#af6935f7", scale: "2.5", borderRadius: "10%" }}
      />
    </header>
    <Canvas shadows>
      <App />
    </Canvas>

    <button className="btn--sound">
      <span className="material-symbols-rounded">music_note</span>
    </button>

    <footer></footer>
  </React.StrictMode>
);
