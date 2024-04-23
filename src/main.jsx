import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBEs0JDGOGnrxf-ceFz29f4ns7CqH0UZ40",
  authDomain: "proyectoreact-c2ba2.firebaseapp.com",
  projectId: "proyectoreact-c2ba2",
  storageBucket: "proyectoreact-c2ba2.appspot.com",
  messagingSenderId: "963845577628",
  appId: "1:963845577628:web:1f23f2dbc791e54123c659",
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
