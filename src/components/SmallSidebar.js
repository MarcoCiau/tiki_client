import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppContext } from "../context/appContext";
import { toggleSidebar } from "../context/actions";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

export const SmallSidebar = () => {
  const { dispatch, showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={() => toggleSidebar(dispatch)}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} dispatch={dispatch} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
