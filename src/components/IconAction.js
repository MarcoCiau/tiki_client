import React from "react";
import Wrapper from "../assets/wrappers/IconAction";
const IconAction = ({handleClick, icon}) => {
  return (
    <Wrapper>
      <span className="icon icon-action" onClick={handleClick}>
        {" "}
        {icon}
      </span>
    </Wrapper>
  );
};

export default IconAction;
