import React, { useEffect } from "react";
import moment from "moment";
import { useAppContext } from "../../context/appContext";
import { Table } from "../../components";
import TableActions from "../../components/TableActions";
import { getDevices } from "../../context/actions";
import { getUTCOffsetFromTimezoneString } from "../../util/timezoneList";
import SearchContainer from "../../components/SearchContainer";

const Device = () => {
  const { dispatch, user, devices } = useAppContext(); //get state from app context store
  useEffect(() => {
    getDevices(dispatch, {});
    // eslint-disable-next-line
  }, []);

  const utcOffset = React.useMemo(
    () => getUTCOffsetFromTimezoneString(user.timezone),
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "MAC Address",
        accessor: "mac",
      },
      {
        Header: "Status",
        accessor: "connected",
        Cell: ({ cell: { value } }) => {
          return value === true ? <p>Connected</p> : <p>Disconnected</p>;
        },
      },
      {
        Header: "Last Connection",
        accessor: "lastConnected",
        Cell: ({ cell: { value } }) => {
          let lasDisconnectedDate = moment(value).utcOffset(utcOffset);
          lasDisconnectedDate = lasDisconnectedDate.format(
            "YYYY-MM-DD HH:mm:ss"
          );
          return lasDisconnectedDate;
        },
      },
      {
        Header: "Last Report",
        accessor: "lastReport",
        Cell: ({ cell: { value } }) => {
          let lasDisconnectedDate = moment(value).utcOffset(utcOffset);
          lasDisconnectedDate = lasDisconnectedDate.format(
            "YYYY-MM-DD HH:mm:ss"
          );
          return lasDisconnectedDate;
        },
      },
      {
        Header: "Actions",
        accessor: "",
        Cell: ({ cell: { value } }) => <TableActions values={value} />,
      },
    ],
    []
  );

  return (
    <>
      <SearchContainer />
      <Table columns={columns} data={devices} />
    </>
  );
};

export default Device;
