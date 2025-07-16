// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserAuthProvider } from "./context/User/AuthContext";
import { NotificationProvider } from "./context/User/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      <UserAuthProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
      </UserAuthProvider>
    </Router>
);