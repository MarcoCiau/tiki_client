import { useState } from "react";
import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { displayAlert, updateUser } from "../../context/actions";
import { timezones } from "../../util/timezoneList";

const Profile = () => {
  const { dispatch, user, showAlert, isLoading } = useAppContext();
  const [profile, setProfile] = useState({
    name: user?.name,
    email: user?.email,
    timezone: user?.timezone,
  });

  const { name = "", email = "", timezone = "" } = profile;

  const handleChange = (e) => {
    setProfile((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !timezone) {
      // test and remove temporary
      displayAlert(dispatch);
      return;
    }
    updateUser(dispatch, { name, email, timezone });
  };

  const getTimezoneList = () => {
    return timezones.map((tz) => tz.text);
  }
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
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
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />

            <FormRowSelect
            labelText='Timezone'
            name='timezone'
            value={timezone}
            handleChange={handleChange}
            list={getTimezoneList()}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
