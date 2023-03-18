import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Login.css";
import * as auth from "./Auth";

function Login(props) {
  const navigate = useNavigate();

  const { handleLogin } = props;
  const [username, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleResetInputs = () => {
    setLogin("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    auth
      .authorize(username, password)
      .then((data) => {
        if (data.jwt) {
          handleResetInputs();
          handleLogin();
          navigate("/my-profile", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-container">
      <h1 className="login-title">Вход</h1>
      <form className="enter-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          name="Login"
          type="Login"
          placeholder="Логин"
          onChange={handleChangeLogin}
        />
        <input
          className="login-input"
          name="Password"
          type="Password"
          placeholder="Пароль"
          onChange={handleChangePassword}
        />
        <input className="button-submit_login" type="submit" />
      </form>
      <p>
        Нет аккаунта? Заведите!
        <Link to="/register">Зарегестрироваться</Link>
      </p>
    </div>
  );
}

export default Login;
