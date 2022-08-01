import { useEffect } from "react";
import {
  getDevices,
  setSocketIORoomId,
  showStats,
} from "../../context/actions";
import { useAppContext } from "../../context/appContext";
import {
  StatsContainer,
  ChartsContainer,
  FormRowSelect,
  Realtime,
} from "../../components/";
import Loading from "../../components/Loading";

const Stats = () => {
  const {
    dispatch,
    devices,
    isLoading,
    voltageTimeSeries,
    totalDevices,
    socketRoomId,
  } = useAppContext();

  useEffect(() => {
    const asyncTask = async () => {
      if (totalDevices === 0) await getDevices(dispatch);
      if (devices.length > 0) {
        await showStats(dispatch, devices[socketRoomId]._id);
      }
    };
    asyncTask().catch(console.error);
    // eslint-disable-next-line
  }, [totalDevices]);

  if (isLoading) {
    return <Loading center />;
  }
  if (totalDevices === 0) {
    return (
      <>
        <h2>No devices to display...</h2>
      </>
    );
  }

  const handleSelectDevice = (e) => {
    e.preventDefault();
    const selectIdx = e.target.selectedIndex;
    setSocketIORoomId(dispatch, selectIdx);
    showStats(dispatch, devices[selectIdx]._id);
  };

  const listDevices = () => {
    return devices.map((device) => {
      return device.name;
    });
  };

  return (
    <>
      <FormRowSelect
        labelText="Select a Device"
        name="deviceList"
        value={devices[socketRoomId].name}
        handleChange={handleSelectDevice}
        list={listDevices()}
      />

      {!voltageTimeSeries && (
        <>
          <p>No data sensors to display.</p>
        </>
      )}

      {voltageTimeSeries && (
        <>
          <Realtime></Realtime>
          <StatsContainer />
          <ChartsContainer />
        </>
      )}
    </>
  );
};

export default Stats;
