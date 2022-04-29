import "./Dashboard.scss";
import Topbar from "../../Static/Topbar/Topbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useMemo, useState } from "react";
import usersJson from "../../Data/users.json";
import ActiveUsers from "../../Components/ActiveUsers";
import Subscription from "../../Components/Subscription";
import FeaturedUsers from "../../Components/FeaturedUsers";
import Datatable from "./Datatable/Datatable";
import { Link } from "react-router-dom";

// import axios from "axios";
const Dashboard = () => {
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
    // const fetchData = async () => {
    //   const data = await fetch("subscriptions.json");
    //   console.log(data);
    //   const json = await data.json();
    //   console.log(json);
    //   return json;
    // };
    // const result = fetchData().catch(console.error);
    // setUsers(usersJson);
    // setSubscriptions(subscriptionsJson);
    // (async () => {
    //   const result = await axios("../../Data/users.json");
    //   setData(result.data);
    //   console.log(data);
    // })();
    setUsers(usersJson);
    setData(users.slice(0, 5));
  }, [users]);
  return (
    <section className="dashboard-section">
      <Topbar></Topbar>
      <div className="container">
        <div className="row">
          <div className="card total-users-card">
            <div className="row align-items-center">
              <h2>TOTAL USERS</h2>
              <div className="label row align-items-center">
                <KeyboardArrowUpIcon />
                <p>48%</p>
              </div>
            </div>
            <ActiveUsers />
            <footer style={{ marginTop: "1.5rem" }}>
              <p>See all users</p>
            </footer>
          </div>
          <div className="card user-plan-card">
            <div className="row align-items-center">
              <h2>USERS SUBSCRIPTIONS</h2>
              <div className="label row align-items-center">
                <KeyboardArrowUpIcon />
                <p>20%</p>
              </div>
            </div>
            <Subscription></Subscription>
          </div>
        </div>
        <div className="card featured-users-card">
          <h2>FEATURED USERS</h2>
          <Datatable columns={columns} data={data}></Datatable>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
