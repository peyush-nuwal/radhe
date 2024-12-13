import React, { useEffect } from "react";
import{Outlet, useLocation} from "react-router-dom"
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function Layout()
{
  
   const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);
  

    return (
      <>
        <Navbar scrollToBottom={scrollToBottom} />
        <Outlet />
        <Footer scrollToTop={scrollToTop} />
      </>
    );
}
export default Layout