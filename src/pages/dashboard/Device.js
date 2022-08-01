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
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const Device = () => {
  const { dispatch, user, devices, deviceTypeOptions, page, search, searchStatus, sort, showModal } = useAppContext(); //get state from app context store
  useEffect(() => {
    getDevices(dispatch, {page, search, searchStatus, sort});
    // eslint-disable-next-line
  }, [page, search, searchStatus, sort]);

  const utcOffset = React.useMemo(
    () => getUTCOffsetFromTimezoneString(user.timezone),
    // eslint-disable-next-line 
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ cell: { value } }) => {
          return value ? deviceTypeOptions[value - 1] : "";
        },
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
    // eslint-disable-next-line 
    []
  );

  return (
    <Wrapper>
    <h3>devices </h3>
    <ModalForm modalIsOpen={showModal}>
      <AddEditDeviceForm />
    </ModalForm>
      <SearchContainer />
      <Table columns={columns} data={devices} />
    </Wrapper>
  );
};

export default Device;
