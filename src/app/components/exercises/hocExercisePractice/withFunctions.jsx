import React from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
const isAuth = () => localStorage.getItem("auth") !== null;
  const onLogin = (token) => {
    localStorage.setItem("auth", token);
    alert("Вы зашли в свой аккаунт");
    return isAuth();
  };
  const onLogOut = () => {
    localStorage.removeItem("auth");
    return isAuth();
  };
  return (
    <Card>
      <Component {...props} isAuth={isAuth()} onLogin={onLogin} onLogOut={onLogOut}/>
    </Card>
  );
};

export default withFunctions;
