import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const Sidebar = () => {
  return (
    <section className="side-bar-section">
      <div className="logo-section row">
        <span className="logo">LOGO</span>
      </div>
      <hr />
      <div className="nav-items">
        <ul>
          <li className="row align-items-center">
            <DashboardIcon className="nav-icon"></DashboardIcon>
            <span>Dashboard</span>
          </li>
          <li className="row align-items-center">
            <PersonOutlineIcon className="nav-icon"/>
            <span>Users</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
