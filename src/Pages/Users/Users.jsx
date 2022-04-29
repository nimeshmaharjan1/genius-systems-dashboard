import React, { useEffect, useState } from "react";
import Topbar from "../../Static/Topbar/Topbar";
import "./Users.scss";
import usersJson from "../../Data/users.json";
import Datatable from "../Dashboard/Datatable/Datatable";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Middle Name",
        accessor: "middle_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Join Date",
        accessor: "join_date",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Country",
        accessor: "country",
      },
    ],
    []
  );
  useEffect(() => {
    setUsers(usersJson);
    setData(users);
  }, [users]);
  return (
    <section className="users-section">
      <Topbar></Topbar>
      <div className="container">
        <div className="row">
          <div className="card users-list">
          <h1 className="title">USERS</h1>
            <Datatable columns={columns} data={data}></Datatable>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
