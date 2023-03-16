import React from "react";
import "./Styles/Login.css";

function Login() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="login-container">
      <h1 className="login-title">Вход</h1>
      <form className="enter-form" onSubmit={handleSubmit}>
        <fieldset>
          <input name="Login" type="Login" placeholder="Логин" />
          <input name="Password" type="Password" placeholder="Пароль" />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
