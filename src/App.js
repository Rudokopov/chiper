import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import MyProfile from "./MyProfile";
import Chiper from "./Chiper";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "./Auth";

import "./Styles/App.css";

function App() {
  const [loggedIn, setloggedIn] = React.useState(false);

  const handleLogin = () => {
    setloggedIn(true);
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.getContent(jwt).then((res) => {
        if (res) {
          setloggedIn(true);
          <Navigate to="/my-profile" replace={true} />;
        }
      });
    }
  };

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
            element={<ProtectedRoute loggedIn={loggedIn} element={MyProfile} />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
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
