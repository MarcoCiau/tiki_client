import { useEffect } from "react";
import { showStats } from "../../context/actions";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, ChartsContainer } from "../../components/";
import Loading from "../../components/Loading";

const Stats = () => {
  const { dispatch, isLoading, monthlyApplications } = useAppContext();

  // useEffect(() => {
  //   showStats(dispatch);
  //   // eslint-disable-next-line
  // }, []);

  // if (isLoading) {
  //   return <Loading center />;
  // }

  return (
    <>
      <StatsContainer />
      {/* {monthlyApplications.length > 0 && <ChartsContainer />} */}
    </>
  );
};

export default Stats;
