import React from "react";
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
          {/* <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/chiper" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          /> */}
          <Route
            path="/chiper"
            element={<ProtectedRoute loggedIn={loggedIn} element={Chiper} />}
          />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route
            path="/login"
            element={
              <div className="loginContainer">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="registerContainer">
                <Register />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
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
