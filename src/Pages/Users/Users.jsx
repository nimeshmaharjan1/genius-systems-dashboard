import FeaturedUsers from "../../Components/FeaturedUsers";
import Topbar from "../../Static/Topbar/Topbar";
import "./Users.scss";

const Users = () => {
  return (
    <section className="users-section">
      <Topbar></Topbar>
      <div className="container">
        <div className="row">
          <div className="card users-list">
            <FeaturedUsers></FeaturedUsers>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
