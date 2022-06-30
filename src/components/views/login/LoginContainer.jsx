import React, { useState, useEffect } from "react";
import LoginView from "./LoginView";
import api from "../../../services/api";
import history from "../../../history";

export default function LoginContainer(props) {
  const { setToken } = props;
  const [valuesLogin, setValuesLogin] = useState({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);

  useEffect(() => {}, [showError]);

  function handleUsername(username) {
    setValuesLogin((oldValues) => ({
      ...oldValues,
      username,
    }));
  }

  function handlePassword(password) {
    setValuesLogin((oldValues) => ({
      ...oldValues,
      password,
    }));
  }

  async function loginUser(credentials) {
    const response = await api.userAuth.login(credentials);
    return response;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      username: valuesLogin.username,
      password: valuesLogin.password,
    });

    if (response && response.data && response.data.token) {
      setToken(response.data);

      sessionStorage.setItem("user", valuesLogin.username);
      history.push("/characters");
    } else {
      setShowError(true);
    }
  };

  return (
    <LoginView
      handlePassword={handlePassword}
      handleUsername={handleUsername}
      username={valuesLogin.username}
      handleSubmit={handleSubmit}
      showError={showError}
    />
  );
}
