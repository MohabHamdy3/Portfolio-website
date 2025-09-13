import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";

const logo = "/logo.png";
const menu = "/menu.png";
const close = "/close.svg";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1RFMmB3Ze2OHXb8IbNDOfZMv488ilRR2M/view?usp=sharing.pdf";
    window.open(resumeUrl, "_blank");
  };

  // Add background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`list-none flex ${
        isMobile ? "flex-col gap-4" : "flex-row gap-6"
      }`}
    >

      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-purple-400" : "text-gray-300"
          } hover:text-white text-[18px] font-medium cursor-pointer relative group`}
          onClick={() => {
            setActive(link.title);
            if (isMobile) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
          {/* Underline animation */}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
        </li>
      ))}
      <li>
        <button
          className="text-[18px] font-medium cursor-pointer relative group"
          onClick={toggleResume}
        >
          Resume
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
        </button>

      </li>
    </ul>
  );

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 transition-all ${
        scrolled ? "bg-primary/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            MOHAB HAMDY
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex">{renderNavLinks()}</div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Animated Mobile Nav */}
          <div
            className={`${
              toggle ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 fixed top-0 right-0 h-screen w-3/4 bg-black/90 backdrop-blur-md z-30 flex flex-col items-center justify-center`}
          >
            {/* Close button inside menu */}
            <button
              className="absolute top-4 right-4 text-purple-500 text-3xl font-bold"
              onClick={() => setToggle(false)}
            >
              ✕
            </button>

            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
