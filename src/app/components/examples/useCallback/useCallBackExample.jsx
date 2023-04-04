import React, { useEffect, useState, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withoutCallback = useRef(0);
  const withCallback = useRef(0);
  const handleChange = ({ target }) => {
setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };
  const validateWithoutCallback = (data) => {
    console.log(data);
  };
  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    validateWithCallback(data);
    validateWithoutCallback(data);
  }, [data]);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);
  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>render without callback: {withoutCallback.current}</p>
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" name="email" id="email" value={data.email || ""} onChange={handleChange}/>
    </CardWrapper>
  );
};

export default UseCallBackExample;
