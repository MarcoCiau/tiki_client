import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdRefresh, MdSearch } from "react-icons/md";
import Wrapper from "../assets/wrappers/PageActions";
import IconAction from "./IconAction";

const PageActions = ({
  handleAdd,
  handleRefresh,
  handleSearch,
  hideSearch = false,
}) => {
  return (
    <Wrapper>
      <div className="actions">
        <div className="action">
          <IconAction
            handleClick={handleAdd}
            icon={<IoMdAddCircle />}
          ></IconAction>
        </div>

        <div className="action">
          <IconAction
            handleClick={handleRefresh}
            icon={<MdRefresh />}
          ></IconAction>
        </div>

        <div className="action">
          {!hideSearch && (
            <IconAction
              handleClick={handleSearch}
              icon={<MdSearch />}
            ></IconAction>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default PageActions;
