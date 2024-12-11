import React from "react";
import{Outlet} from "react-router-dom"
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function Layout()
{
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

    return (
      <>
        <Navbar scrollToBottom={scrollToBottom} />
        <Outlet />
        <Footer scrollToTop={scrollToTop} />
      </>
    );
}
export default Layout