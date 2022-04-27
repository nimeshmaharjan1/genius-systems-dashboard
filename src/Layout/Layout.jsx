import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import "./Layout.scss";
import Users from "../Pages/Users/Users";
import User from "../Pages/Users/User/User";
import Sidebar from "../Static/Sidebar/Sidebar";
const Layout = () => {
  return (
    <main className="main-section row">
      <Sidebar></Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />}></Route>
            <Route path="users">
              <Route index element={<Users />}></Route>
              <Route path=":user_id" element={<User />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Layout;
