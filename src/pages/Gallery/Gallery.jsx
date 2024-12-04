import React from "react";
import './Gallery.css'
function Gallery()
{
    const femaleSuperstars = [
  { id: 1, url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
  { id: 2, url: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
  { id: 3, url: "https://images.unsplash.com/photo-1534126511673-b6899657816a" },
  { id: 4, url: "https://images.unsplash.com/photo-1551829142-a9277674a451" },
  { id: 5, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { id: 6, url: "https://images.unsplash.com/photo-1542567452-77a2089d1e96" },
  { id: 7, url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
  { id: 8, url: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6" },
  { id: 9, url: "https://images.unsplash.com/photo-1534695498075-f4fc13f5dbe0" },
  { id: 10, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
  { id: 11, url: "https://images.unsplash.com/photo-1518128958364-09828b85b22f" },
  { id: 12, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { id: 13, url: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b" },
  { id: 14, url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" },
  { id: 15, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { id: 16, url: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d" },
  { id: 17, url: "https://images.unsplash.com/photo-1545420331-ec3f9974fdc6" },
  { id: 18, url: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
  { id: 19, url: "https://images.unsplash.com/photo-1518128958364-09828b85b22f" },
  { id: 20, url: "https://images.unsplash.com/photo-1529676468697-fd2c8dbf18b5" },
  { id: 21, url: "https://images.unsplash.com/photo-1561489548-08056e118d22" },
  { id: 22, url: "https://images.unsplash.com/photo-1584992952507-0d6b4e0c6057" },
  { id: 23, url: "https://images.unsplash.com/photo-1572635196237-ec6eb4f0dabc" },
  { id: 24, url: "https://images.unsplash.com/photo-1562564055-71e051d33c19" },
  { id: 25, url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 26, url: "https://images.unsplash.com/photo-1556485681-289d0e1e89a0" },
  { id: 27, url: "https://images.unsplash.com/photo-1578894971634-8d7eaf4738f2" },
  { id: 28, url: "https://images.unsplash.com/photo-1565372847960-33f79d0c9e8b" },
  { id: 29, url: "https://images.unsplash.com/photo-1504215680853-026ed2a45def" },
  { id: 30, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
];


    return (
      <div className="gallery">
        {femaleSuperstars.map((item)=>(

            <img src={item.url} key={item.id} alt="" className="gallery-img" />
        ))}
      </div>
    );
}
export default Gallery