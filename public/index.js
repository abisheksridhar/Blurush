import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import './index.scss'

const el = ReactDOM.createRoot(document.getElementById("blurush-app"));
el.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
