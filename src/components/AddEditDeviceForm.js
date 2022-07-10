import { useState } from "react";
import { FormRow, Alert } from "./";
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/AddEditDeviceForm";
import { displayAlert, closeModal, createDevice, editDevice } from "../context/actions";

const AddEditDeviceForm = () => {
  const { dispatch, showAlert, isLoading, isEditing, editDeviceObj } = useAppContext();

  const [device, setDevice] = useState({
    name: editDeviceObj.name,
    mac: editDeviceObj.mac,
    token: editDeviceObj.token,
    type: 1
  });
  const { name = "", mac = "", token = "", type=1 } = device;

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
    if (!name || !mac || (isEditing && !token)) {
      // test and remove temporary
      displayAlert(dispatch);
      return;
    }
    console.log(device);
    if(isEditing) {
      editDevice(dispatch, {_id: editDeviceObj._id, name, mac, token, type});
      setDevice({
        name: "",
        mac: "",
        token: "",
        type: 1
      });
      closeModal(dispatch);
      return;
    }
    createDevice(dispatch, {name, mac, type});
    setDevice({
      name: "",
      mac: "",
      token: "",
      type: 1
    });
  };

  const closeModalHandler = (e) => {
    e.preventDefault();
    closeModal(dispatch);
    setDevice({
      name: "",
      mac: "",
      token: "",
      type: 1
    });
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
