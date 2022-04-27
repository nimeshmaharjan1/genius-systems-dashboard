import "./Topbar.scss";
import SettingsIcon from "@mui/icons-material/Settings";
const Topbar = () => {
  return (
    <header className="top-bar-section row align-items-center">
      <SettingsIcon className="icon" />
    </header>
  );
};

export default Topbar;
