import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import {IoMdAddCircle} from "react-icons/io";
import {MdRefresh, MdSearch} from "react-icons/md"
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/PageActions";
const PageActions = () => {
  return (
    <Wrapper>
      <div className="actions">
        <div className="action">
          <NavLink to="/device" onClick={() => console.log("add")}>
            <span className="icon">{<IoMdAddCircle />}</span>
          </NavLink>
        </div>

        <div className="action">
          <NavLink to="/device" onClick={() => console.log("refresh")}>
            <span className="icon">{<MdRefresh />}</span>
          </NavLink>
        </div>

        <div className="action">
          <NavLink to="/device" onClick={() => console.log("search")}>
            <span className="icon">{<MdSearch />}</span>
          </NavLink>
        </div>

      </div>
    </Wrapper>
  );
};

export default PageActions;
