import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/TableAction";
import { useAppContext } from "../context/appContext";
import { deleteDevice, setEditDevice } from "../context/actions";

const TableActions = ({_id}) => {
  const { dispatch } = useAppContext();
  return (
    <Wrapper>
      <div className="actions">
        <div className="action">
          <span className="icon" onClick={() => setEditDevice(dispatch, _id)}>{<FaEdit />}</span>
        </div>

        <div className="action">
          <NavLink to="/device" onClick={() => deleteDevice(dispatch, _id)}>
            <span className="icon">{<AiTwotoneDelete />}</span>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default TableActions;
