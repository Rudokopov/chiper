import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "./Styles/Register.css";

function validateUsername(value) {
  let error;
  if (value.length < 2) {
    error = "Имя не может быть короче двух символов";
  } else if (value === "admin") {
    error = "Nice try!";
  }
  return error;
}

function validateCurrentPassword(value) {
  let error;
  if (!value) {
    error = "Неправильный пароль";
  }
  return error;
}

export default function Register() {
  const [isTrue, setIsTrue] = useState(Boolean);

  const handleChangeTrue = () => {
    setIsTrue(false);
  };

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Заполните поле";
    } else if (value.length < 4) {
      error = "Пароль легкий";
    }
    return error;
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Регистрация</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          currentPassword: "",
        }}
        onSubmit={(values) => {
          if (values.currentPassword !== values.password) {
            console.log("Неправильный пароль");
            return;
          }
          if (!values.errors) {
            setIsTrue(false);
          }
          console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="register-form">
            <Field
              name="username"
              validate={validateUsername}
              placeholder="Введите никнейм"
              className={`${
                errors.username ? "input-field error-field" : "input-field"
              }`}
            />
            {errors.username && touched.username && (
              <div className="error-message">{errors.username}</div>
            )}

            <Field
              name="password"
              type="password"
              validate={validatePassword}
              placeholder="Введите пароль"
              className={`${
                errors.password ? "input-field error-field" : "input-field"
              }`}
            />
            {errors.password && touched.password && (
              <div className="error-message">{errors.password}</div>
            )}

            <Field
              name="currentPassword"
              type="password"
              validate={validateCurrentPassword}
              placeholder="Повторите пароль"
              className={`${
                errors.currentPassword
                  ? "input-field error-field"
                  : "input-field"
              }`}
            />
            {errors.currentPassword && touched.currentPassword && (
              <div className="error-message">{errors.currentPassword}</div>
            )}

            <button
              className={`${
                isTrue
                  ? "button-submit"
                  : "button-submit button-submit_disabled"
              }`}
              type="submit"
            >
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// function Register() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [currentPassword, setCurrentPassword] = useState("");

//   const handleChangeName = (e) => {
//     setUserName(e.target.value);
//   };

//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleChangeCurrentPassword = (e) => {
//     setCurrentPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     // e.preventDefault();

//     if (password === currentPassword) {
//       console.log("Проходите");
//     } else {
//       console.log("Вам сюда нельзя, сэр!");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2 className="register-title">Зарегестрироваться</h2>
//       <Formik
//         initialValues={{ email: "", password: "", currentPassword: "" }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email address";
//           }
//           return errors;
//         }}
//         onSubmit={handleSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form className="register-form" onSubmit={handleSubmit}>
//             <label type="email">Введите Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             {errors.email && touched.email && errors.email}
//             <input
//               type="password"
//               id="user-input__password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//             />
//             {errors.password && touched.password && errors.password}
//             <input
//               type="password"
//               id="user-input__current-password"
//               name="currentPassword"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.currentPassword}
//             />
//             {errors.password && touched.password && errors.password}
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </form>
//         )}
//       </Formik>

//       <form className="register-form" onSubmit={handleSubmit}>
//         <input
//           type="name"
//           className="user-input__name"
//           onChange={handleChangeName}
//           placeholder="Имя пользователя"
//           value={userName || ""}
//         />
//         <input
//           type="password"
//           id="user-input__password"
//           className="user-input__password"
//           onChange={handleChangePassword}
//           placeholder="Пароль"
//           value={password || ""}
//         />
//         <input
//           type="password"
//           id="user-input__current-password"
//           className="user-input__password"
//           onChange={handleChangeCurrentPassword}
//           placeholder="Повторите пароль"
//           value={currentPassword || ""}
//         />
//         <input type={"submit"} />
//       </form>
//     </div>
//   );
// }

// export default Register;
