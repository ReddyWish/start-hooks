import React, { useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  React.useEffect(() => {
    console.log("render button");
  });
  return <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>;
};
LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};

const MemoizedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = React.useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, []);
  return (
    <>
      <button className="btn btn-primary" onClick={() => setState(!state)}>initiate rerender</button>
      <MemoizedLogOutButton onLogOut={handleLogOut}/>
    </>
  );
};

export default MemoWithUseCallbackExample;
