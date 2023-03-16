import React, { useState } from "react";
import "../auth/AuthContainer.scss";

import Login from "./Login.component";
import Register from "./Register.component";
import Reset from "./Reset.component";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePaswword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false });

    /*     setReset(false);
    setLogin(true);
    setRegister(false); */
  };

  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false });
  };

  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true });
  };

  return (
    <>
      <section className="--flex-center --100vh">
        <div className="container box">
          {/* ha a login state true */}
          {auth.login && (
            <Login
              onRegister={handleRegister}
              onReset={handleReset}
              onShowPassword={showPassword}
              onTogglePassword={handleTogglePaswword}
            />
          )}
          {/* ha a register state true */}
          {auth.register && (
            <Register
              onLogin={handleLogin}
              onShowPassword={showPassword}
              onTogglePassword={handleTogglePaswword}
            />
          )}
          {/* ha a reset state true */}
          {auth.reset && <Reset onLogin={handleLogin} />}
        </div>
      </section>
    </>
  );
};

export default AuthContainer;
