import "./Dashboard.scss";
import Topbar from "../../Static/Topbar/Topbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import subscriptionsJson from "../../Data/subscriptions.json";
import ActiveUsers from "../../Components/ActiveUsers";
import Subscription from "../../Components/Subscription";
import Users from "../Users/Users";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
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
    setSubscriptions(subscriptionsJson);
  }, []);
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
                <p>20%</p>
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
          <Users></Users>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
