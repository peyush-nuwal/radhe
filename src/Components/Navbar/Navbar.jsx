import React, { useState ,useEffect, useRef} from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom"
 import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";


function Navbar({ scrollToBottom }) {
  const [open, setOpen] = useState(false);
  const navRef=useRef()
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


  const handleClickOutside=(e)=>{
    if(navRef.current&&!navRef.current.contains(e.target)){
      setOpen(false)
    }
  }

  useEffect(() => {
  document.addEventListener('mousedown',handleClickOutside)
  
    return () => {
      document.removeEventListener('mousedown',handleClickOutside)
    }

  }, [])
  
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
          <li className="contact-btn" onClick={scrollToBottom}>
            Contact
          </li>
        </div>
        <CiMenuFries className="hame-menu" onClick={() => setOpen(true)} />
      </nav>

      <div className={`nav-mobile-link ${open ? "active" : ""}`} ref={navRef}>
        <li>
          <NavLink
            to={"/"}
            className="item  nav-mobile-link-item"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/explore"}
            className="item nav-mobile-link-item"
            onClick={() => setOpen(false)}
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/gallery"}
            className="item nav-mobile-link-item"
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>
        </li>
        <li
          className="contact-btn nav-mobile-link-item"
          onClick={()=>{
            scrollToBottom();
            setOpen(false)
          }}
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