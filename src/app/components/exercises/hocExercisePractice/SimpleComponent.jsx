import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  const [auth, setAuth] = React.useState(isAuth);
  return (
    <>
      {
        auth ? (<button className="btn btn-primary" onClick={() => setAuth(onLogOut)}>Выйти из системы</button>) : (<button className="btn btn-primary" onClick={() => setAuth(onLogin("token"))}>Войти</button>)
      }
    </>
  );
};

SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func,
  isAuth: PropTypes.bool.isRequired
};

export default SimpleComponent;
