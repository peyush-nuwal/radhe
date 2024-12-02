import React from "react";
import "./Home.css"
import Hero from "../Hero/Hero";


const slides = [
  {
    id: 1,
    title: "Flexible Chair",
    desc: "A flexible, soft chair offers ergonomic support, adjustable comfort, cozy cushioning, and versatile design, ensuring a relaxing and pliable seating experience.",
    src: "/assets/imgs/chair.png",
  },
  {
    id: 2,
    title: "ACP Panel",
    desc: "An ACP panel is a lightweight, durable aluminum composite material used for modern cladding and architecture.",
    src: "/assets/imgs/acp.jpg",
  },
  {
    id: 3,
    title: "Aluminium Fabrications",
    desc: "A flexible, soft chair offers ergonomic support, adjustable comfort, cozy cushioning, and versatile design, ensuring a relaxing and pliable seating experience.",
    src: "/assets/imgs/window.jpg",
  },
];
function Home() {
    return (
        
        <div className="home">
            <Hero slides={slides}  />
        </div>
      
    )
}
export default Home