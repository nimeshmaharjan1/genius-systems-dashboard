import "./Dashboard.scss";
import Topbar from "../../Static/Topbar/Topbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import subscriptionsJson from "../../Data/subscriptions.json";
import usersJson from "../../Data/users.json";
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
    setUsers(usersJson);
    setSubscriptions(subscriptionsJson);
  }, []);
  const handleClick = () => {
    console.log(uniquePlans);
  };
  const plans = subscriptions.map((subscription) => subscription.package);
  const uniquePlans = [...new Set(plans)];
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
            <footer>
              <p>See all users</p>
              <button onClick={handleClick}>Click</button>
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
          </div>
        </div>
        {subscriptions &&
          subscriptions.map((subscription) => {
            return <div key={subscription.id}>{subscription.package}</div>;
          })}
      </div>
    </section>
  );
};

export default Dashboard;
