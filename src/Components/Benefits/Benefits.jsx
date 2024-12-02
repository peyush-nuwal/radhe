import React from "react";
import "./Benefits.css";
import { GrMoney } from "react-icons/gr";
import { LuLayout } from "react-icons/lu";
import { BsTools } from "react-icons/bs";

const Benifits = () => {
  const benefits = [
    {
      id: 1,
      Icon: GrMoney, // Pass the icon component directly
      title: "Affordable pricing with exceptional value.",
    },
    {
      id: 2,
      Icon: LuLayout,
      title: "Innovative and elegant design solutions.",
    },
    {
      id: 3,
      Icon: BsTools,
      title: "Top-quality materials and craftsmanship.",
    },
  ];

  return (
    <div className="benefits-container">
      <h1 className="benefits-heading">Why Choose Us</h1>
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div className="benefit-card" key={benefit.id}>
            <benefit.Icon className="benefit-icon" />
            <p className="benefit-title">{benefit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
