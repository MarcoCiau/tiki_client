import React, { useMemo } from "react";
import makeData from "../../util/makeData";
import { Table } from "../../components";
import TableActions from "../../components/TableActions";
const Device = () => {
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
        Header: "Connected",
        accessor: "connected",
      },
      {
        Header: "Last Disconnection",
        accessor: "lastConnected",
      },
      {
        Header: "Last Report",
        accessor: "lastReport",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ cell: { value } }) => <TableActions values={value} />,
      },
    ],
    []
  );
  const data = React.useMemo(() => makeData(20), []);
  return <Table columns={columns} data={data} />;
};

export default Device;
