import logo from "../assets/images/logo.png";
import Wrapper from "../assets/wrappers/Logo";

const Logo = () => {
  return (
    <Wrapper>
      <img
        src={logo}
        alt="tiki - iot platform logo"
        className="logo logo-img"
      />
    </Wrapper>
  );
};

export default Logo;
