import React, { useEffect } from "react";
import moment from "moment";
import { useAppContext } from "../../context/appContext";
import { Table } from "../../components";
import TableActions from "../../components/TableActions";
import { getDevices } from "../../context/actions";
import { getUTCOffsetFromTimezoneString } from "../../util/timezoneList";
import SearchContainer from "../../components/SearchContainer";
import ModalForm from "../../components/ModalForm";
import AddEditDeviceForm from "../../components/AddEditDeviceForm";

const Device = () => {
  const { dispatch, user, devices,
  page, search, searchStatus, sort, numOfPages, totalDevices, showModal, editDeviceId } = useAppContext(); //get state from app context store
  useEffect(() => {
    getDevices(dispatch, {page, search, searchStatus, sort});
    // eslint-disable-next-line
  }, [page, search, searchStatus, sort, editDeviceId]);

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
        accessor: "_id",
        Cell: ({ cell: { value } }) => <TableActions _id={value} />,
      },
    ],
    []
  );
  if (totalDevices === 0) {
    return (
      <>
        <h2>No devices to display...</h2>
        <button
        className="btn btn-hero btn-primary">
          Add Device
        </button>
      </>
    );
  }
  return (
    <>
    <ModalForm modalIsOpen={showModal}>
      <AddEditDeviceForm />
    </ModalForm>
      <SearchContainer />
      <Table columns={columns} data={devices} />
    </>
  );
};

export default Device;
