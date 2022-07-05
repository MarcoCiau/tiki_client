import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/TableAction";
const TableActions = () => {
  return (
    <Wrapper>
      <div className="actions">
        <div className="action">
          <NavLink to="/device" onClick={() => console.log("edit")}>
            <span className="icon">{<FaEdit />}</span>
          </NavLink>
        </div>

        <div className="action">
          <NavLink to="/device" onClick={() => console.log("delete")}>
            <span className="icon">{<AiTwotoneDelete />}</span>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default TableActions;
