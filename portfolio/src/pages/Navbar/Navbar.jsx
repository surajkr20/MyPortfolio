import { useRef } from "react";
import Logo from "../../components/Logo/Logo";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import useThemeSwitcher from "../../components/useThemeSwitcher";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

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
      <nav className="nav-container dark:bg-dark dark:text-light bg-light text-dark shadow-md dark:border-b-2 dark:border-b-light
      flex flex-row items-center justify-between w-full mx-auto sm:px-20 px-6 py-2 z-10">
        {/* darkMode toggle button */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="sm:rounded-lg dark:bg-light bg-dark text-light font-serif font-semibold dark:text-dark sm:p-2 sm:w-[100px] w-[45px] h-[45px] 
          rounded-full sm:text-[12px] text-[9px] flex items-center justify-center p-3"
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Logo Icon */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="desktop-menu nav-list flex flex-row items-center gap-6 list-none cursor-pointer ">
          <Link to="/">
            <li id="list" className="dark:hover:border-b-2 dark:hover:text-primary dark:border-light hover:border-b-4 border-dark">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li id="list" className="dark:hover:border-b-2 dark:hover:text-primary dark:border-light hover:border-b-4 border-dark">
              About
            </li>
          </Link>
          <Link to="/project">
            <li id="list"
            className="dark:hover:border-b-2 dark:hover:text-primary dark:border-light hover:border-b-4 border-dark"
            >Projects</li>
          </Link>
          <Link to="contact">
            <li id="list"
            className="dark:hover:border-b-2 dark:hover:text-primary dark:border-light hover:border-b-4 border-dark"
            >Contact</li>
          </Link>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger" ref={menu} onClick={toggleMenu}>
          <div className="ham dark:bg-light"></div>
          <div className="ham dark:bg-light"></div>
          <div className="ham dark:bg-light"></div>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={mobile}
          className="mobile-menu flex flex-col items-center justify-center gap-5 list-none cursor-pointer text-white"
        >
          <Link to="/" onClick={closeMenu}>
            <li id="list" >Home</li>
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

        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
