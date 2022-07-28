import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { getDevices } from "../../context/actions";
import { useAppContext } from "../../context/appContext";
const SharedLayout = () => {
  const { dispatch, totalDevices,
  } = useAppContext();

  useEffect(() => {
    getDevices(dispatch);
  }, [totalDevices]);
  
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
