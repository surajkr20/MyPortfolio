import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from "../../components/Logo/Logo";
import useThemeSwitcher from "../../components/useThemeSwitcher";
import "./Navbar.css";
// import Projects from "../Project/Projects";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="nav-container dark:bg-dark dark:text-light bg-light text-dark shadow-md dark:border-b-2 dark:border-b-light
      flex flex-row items-center justify-between w-full mx-auto sm:px-20 px-6 py-2 z-10">
        
        {/* Dark Mode Toggle Button */}
        <button id="Toggle-Dark-Btn"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="sm:rounded-lg dark:bg-light bg-dark text-light font-serif font-semibold dark:text-dark sm:p-2 sm:w-[70px] w-[45px] h-[45px] 
          rounded-full sm:text-[12px] text-[9px] flex items-center justify-center p-3 transition duration-300"
          aria-label="Toggle Dark Mode"
        >
          {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="desktop-menu nav-list flex flex-row items-center gap-6 list-none cursor-pointer">
          {[
            { path: "/suraj-portfolio", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/contact", label: "Contact" }
          ].map(({ path, label }) => (
            <li key={path} className="dark:hover:border-b-2 dark:hover:text-primary dark:border-light hover:border-b-4 border-dark hover:scale-105 transition-all">
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Mobile Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="mobile-menu flex flex-col items-center justify-center text-center gap-8 list-none cursor-pointer text-white bg-light text-dark font-serif font-semibold dark:bg-dark dark:text-light absolute top-16 left-0 w-full h-auto py-5 shadow-md transition-all duration-300">
            {[
              { path: "/suraj-portfolio", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <li key={path} className="hover:border-b-4 border-b-dark hover:scale-105 transition-all mr-14" onClick={closeMenu}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        )}

        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
