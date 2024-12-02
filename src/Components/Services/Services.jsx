import React from 'react'
import './Services.css'
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
        const services=[
             {id:1,title:'Furniture',src:"./assets/imgs/services-1.png"},
             {id:2,title:'ACP Designs',src:"./assets/imgs/services-2.png"},
             {id:3,title:'Custom Frame',src:"./assets/imgs/services-3.png"}
        ]
  return (
    <div className="service-card-wrapper">
      {services.map((serv) => (
        <div className="service-card" key={serv.id}>
          <div className="service-card-img-container">
            <img
              src={serv.src}
              alt=""
              className="service-card-img"
            />
          </div>
          <div className="service-card-textbox">
            <h3 className="service-card-textbox-title">{serv.title}</h3>
            <div className="service-card-textbox-show">
              <h6>See Designs</h6>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services