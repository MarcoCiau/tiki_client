import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { displayAlert, registerUser, loginUser } from "../context/actions";
// global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};
// if possible prefer local state
// global state

function Register() {
  const { dispatch, isLoading, user, showAlert } = useAppContext(); //get state from app context store
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember } = values;
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      displayAlert(dispatch);
      return;
    }
    if (isMember) {
      loginUser({ email, password }, dispatch);
    } else {
      registerUser({ name, email, password }, dispatch);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [user, navigate]);
  
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name field */}

        {!isMember && (
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

        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
