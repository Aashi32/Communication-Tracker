import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">Communication Tracker</div>
    <div className="navbar-links">
      <NavLink to="/admin" activeClassName="active-link">
        Admin
      </NavLink>
      <NavLink to="/user" activeClassName="active-link">
        User
      </NavLink>
      <NavLink to="/notifications" activeClassName="active-link">
        Notifications
      </NavLink>
      <NavLink to="/calendar" activeClassName="active-link">
        Calendar
      </NavLink>
      <NavLink to="/analytics" activeClassName="active-link">
        AnalyticsModule
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
