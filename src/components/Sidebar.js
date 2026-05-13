import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-box">
        <div className="logo">FU</div>
        <div>
          <h2>Admin Portal</h2>
          <p>University System</p>
        </div>
      </div>

      <nav className="menu">
        <NavLink to="/" className="menu-link">
          <span>🏠</span> Dashboard
        </NavLink>

        <NavLink to="/faculty" className="menu-link">
          <span>👨‍🏫</span> Faculty
        </NavLink>

        <NavLink to="/supervisors" className="menu-link">
          <span>📋</span> Supervisors
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Logged in as</p>
        <h4>Admin</h4>
      </div>
    </aside>
  );
}

export default Sidebar;