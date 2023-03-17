import React from "react";
import { Formik } from "formik";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import MyProfile from "./MyProfile";
import Chiper from "./Chiper";
import ProtectedRoute from "./ProtectedRoute";

import "./Styles/App.css";

function App() {
  const [loggedIn, setloggedIn] = React.useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute loggedIn={loggedIn} element={Chiper} />}
          />
          <Route
            path="/chiper"
            element={<ProtectedRoute loggedIn={loggedIn} element={Chiper} />}
          />
          <Route
            path="/my-profile"
            element={<ProtectedRoute loggedIn={loggedIn} element={Chiper} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <div className="error-container">
                <h1>404 страница не найдена</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
