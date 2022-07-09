import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import Wrapper from "../assets/wrappers/SearchContainer";
import {
  clearFilters,
  getDevices,
  handleFormInputChange,
  showModal,
} from "../context/actions";
import { useAppContext } from "../context/appContext";
import IconAction from "./IconAction";
import PageActions from "./PageActions";

// import CollapseButton from "./CollapseButton";

const SearchContainer = () => {
  const {
    dispatch,
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    page,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleFormInputChange(dispatch, e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters(dispatch);
  };

  const handleHideSearchForm = () => {
    if (isLoading) return;
    setCollapseForm(true);
    clearFilters(dispatch);
  };

  const handleAddDevices = () => {
    showModal(dispatch);
  }

  const handleShowSearchForm = () => {
    if (isLoading) return;
    setCollapseForm(!collapseForm);
  };

  const handleRefreshDevices = () => {
    if (isLoading) return;
    getDevices(dispatch, { page, search, searchStatus, sort });
  };
  const [collapseForm, setCollapseForm] = useState(true);

  return (
    <Wrapper>
      <PageActions
        handleAdd={handleAddDevices}
        handleRefresh={handleRefreshDevices}
        handleSearch={handleShowSearchForm}
        hideSearch={!collapseForm}
      />
      {!collapseForm && (
        <form className="form">
          <div className="icon-container">
            <IconAction
              handleClick={handleShowSearchForm}
              icon={<AiOutlineClose />}
            ></IconAction>
          </div>

          {/* search position */}
          <div className="form-center">
            <FormRow
              type="text"
              name="search"
              value={search}
              handleChange={handleSearch}
            ></FormRow>

            {/* search by status */}
            <FormRowSelect
              labelText="device status"
              name="searchStatus"
              value={searchStatus}
              handleChange={handleSearch}
              list={["all", ...statusOptions]}
            ></FormRowSelect>

            {/* sort */}

            <FormRowSelect
              name="sort"
              value={sort}
              handleChange={handleSearch}
              list={sortOptions}
            ></FormRowSelect>

            <button
              className="btn btn-block btn-danger"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              clear filters
            </button>
          </div>
        </form>
      )}
    </Wrapper>
  );
};

export default SearchContainer;
