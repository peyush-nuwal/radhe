import React, { useState ,useEffect} from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom"
 import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";


function Navbar({ scrollToBottom }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <img src="/radhe-logo.svg" alt="" className="logo" />
        </div>
        <div className="nav-link">
          <li>
            <NavLink to={"/"} className="item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/explore"} className="item">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to={"/gallery"} className="item">
              Gallery
            </NavLink>
          </li>
          <li className="item" onClick={ scrollToBottom}>
            Contact
          </li>
        </div>
        <CiMenuFries className="hame-menu" onClick={() => setOpen(true)} />
      </nav>

      <div className={`nav-mobile-link ${open ? "active" : ""}`}>
        <li>
          <NavLink to={"/"} className="item  nav-mobile-link-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/explore"} className="item nav-mobile-link-item">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"} className="item nav-mobile-link-item">
            Gallery
          </NavLink>
        </li>
        <li
          className="item nav-mobile-link-item"
          onClick={scrollToBottom}
        >
          Contact
        </li>
        <RxCross1
          className="nav-mobile-close-btn"
          onClick={() => setOpen(false)}
        />
      </div>
    </>
  );
}
export default Navbar