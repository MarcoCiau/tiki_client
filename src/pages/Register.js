import { useState, useEffect } from "react";
import { Alert, FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  showAlert: true,
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember } = values;
  // TODO: global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert />}
        {/* name field */}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
