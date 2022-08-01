import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import links from "../util/links";

const NavLinks = ({ toggleSidebar }) => {
  const { dispatch } = useAppContext();
  const toggleSidebarHandler = () => {
    toggleSidebar(dispatch);
  };

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={id}
            onClick={toggleSidebarHandler}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
