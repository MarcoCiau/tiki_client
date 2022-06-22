import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { clearAlert, displayAlert } from "../redux/actions/actions";
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
  const { isLoading, showAlert } = useSelector((state) => state.ui); //get state from redux's store
  const dispatch = useDispatch(); //get redux-dispatch function
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember } = values;

  const toggleMember = () => {
    setValues({ ...values, isMember: !isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!email || !password || (!isMember && !name)) {
      //show alert
      dispatch(displayAlert);
      setTimeout(() => {
        dispatch(clearAlert);
      }, 3000);
      return false;
    }
    return true;
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(name, email, password);
  };

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
