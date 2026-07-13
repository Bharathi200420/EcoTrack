import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">EcoTrack</h2>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)} to="/services">Services</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;