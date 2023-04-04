import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
  const prevState = useRef(0);
  const [otherState, setOtherState] = useState("false");
  const toggleOtherState = () => {
    setOtherState(prevState => prevState === "false" ? "true" : "false");
  };
  useEffect(() => {
    prevState.current = otherState;
  }, [otherState]);
  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <p>prev State: {prevState.current}</p>
      <p>prev State: {otherState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>toggle other state</button>
    </CardWrapper>
  );
};

export default PrevStateExample;
