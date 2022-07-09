import { useState } from "react";
import { FormRow, FormRowSelect, Alert } from "./";
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/AddEditDeviceForm";
import { displayAlert, updateUser, showModal, closeModal } from "../context/actions";
import { timezones } from "../util/timezoneList";

const AddEditDeviceForm = () => {
  const { dispatch, user, showAlert, isLoading, isEditing } = useAppContext();
  const [device, setDevice] = useState({
    name: "tiki-device",
    mac: "FF:FF:FF:FF:FF:FF",
    token: "",
  });
  const { name = "", mac = "", token = "" } = device;

  const handleChange = (e) => {
    setDevice((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !mac || !token) {
      // test and remove temporary
      displayAlert(dispatch);
      return;
    }
    // updateUser(dispatch, { name, email, timezone });
  };

  const closeModalHandler = (e) => {
    e.preventDefault();
    closeModal(dispatch);
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "Edit Device": "Add Device"} </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            name="mac"
            value={mac}
            handleChange={handleChange}
          />

          {
            isEditing && (<FormRow
            type="text"
            name="token"
            value={token}
            handleChange={handleChange}
          />)

          }
          <button className="btn " type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>

          <button className="btn  clear-btn" onClick={closeModalHandler}>
            Close
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddEditDeviceForm;
