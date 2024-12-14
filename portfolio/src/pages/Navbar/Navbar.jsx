import { useRef } from "react";
import Logo from "../../components/Logo/Logo";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const menu = useRef();
  const mobile = useRef();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    mobile.current.classList.toggle("activemobile");
    mobile.current.classList.toggle("activeham");
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    mobile.current.classList.remove("activemobile");
    mobile.current.classList.remove("activeham");
  };

  return (
    <>
      <nav className="nav-container flex flex-row items-center justify-between w-full mx-auto px-16 py-2 z-10">
        {/* Logo Icon */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="desktop-menu nav-list flex flex-row items-center gap-6 list-none cursor-pointer text-white">
          <Link to="/">
            <li id="list">Home</li>
          </Link>
          <Link to="/about">
            <li id="list">About</li>
          </Link>
          <Link to="/project">
            <li id="list">Projects</li>
          </Link>
          <Link to="contact">
            <li id="list">Contact</li>
          </Link>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger" ref={menu} onClick={toggleMenu}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={mobile}
          className="mobile-menu flex flex-col items-center justify-center gap-5 list-none cursor-pointer text-white"
        >
          <Link to="/" onClick={closeMenu}>
            <li id="list">Home</li>
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <li id="list">About</li>
          </Link>
          <Link to="/project" onClick={closeMenu}>
            <li id="list">Projects</li>
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <li id="list">Contact</li>
          </Link>
        </ul>
        <Outlet/>
      </nav>
    </>
  );
};

export default Navbar;
